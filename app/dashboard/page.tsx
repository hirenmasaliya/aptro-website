"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  AlertCircle,
  ArrowDownRight,
  ArrowUpRight,
  CalendarClock,
  IndianRupee,
  Minus,
  Package,
  RefreshCw,
  ShoppingBag,
  TrendingUp,
  Truck,
  UserPlus,
} from "lucide-react";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], display: "swap" });

/* ------------------------------------------------------------------ */
/* API config: change to match your backend                            */
/* ------------------------------------------------------------------ */
const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "";
const dashboardEndpoint = (uid: string) =>
  `${API_BASE}/api/business/${encodeURIComponent(uid)}/dashboard`;

/** Where the business uid comes from. Order: route param -> localStorage. */
function resolveUid(routeUid?: string | string[]) {
  const fromRoute = Array.isArray(routeUid) ? routeUid[0] : routeUid;
  if (fromRoute) return fromRoute;
  try {
    return localStorage.getItem("businessUid") ?? "";
  } catch {
    return "";
  }
}

/* ------------------------------ Types ------------------------------ */
type Row = Record<string, any>;

interface DashboardData {
  overview: {
    todayOrderCount: number;
    todayRevenue: number;
    currentMonthRevenue: number;
    previousMonthRevenue: number;
    currentYearRevenue: number;
    previousYearRevenue: number;
  };
  orderStatus: {
    pending: number;
    processing: number;
    shipped: number;
    delivered: number;
    cancelled: number;
  };
  orderCounts: {
    today: number;
    yesterday: number;
    currentWeek: number;
    thisMonth: number;
    lastMonth: number;
    thisYear: number;
    lastYear: number;
    totalOrder: number;
  };
  currentWeekDailyOrders: Record<string, number>;
  topProducts: Row[];
  upcomingDelivery: Row[];
  newCustomers: { count: number; data: Row[] };
}

/* ----------------------------- Helpers ----------------------------- */
const inr = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});
const compact = new Intl.NumberFormat("en-IN", { notation: "compact", maximumFractionDigits: 1 });

const fmtMoney = (n: number) => inr.format(n || 0);
const fmtShortMoney = (n: number) => `₹${compact.format(n || 0)}`;

/** Returns null when there's no previous value to compare against. */
function pctChange(current: number, previous: number): number | null {
  if (!previous) return current ? null : 0;
  return ((current - previous) / previous) * 100;
}

const first = (o: Row, keys: string[], fallback: any = undefined) => {
  for (const k of keys) if (o?.[k] !== undefined && o?.[k] !== null) return o[k];
  return fallback;
};

const initials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((s) => s[0]?.toUpperCase())
    .join("") || "?";

const fmtDate = (v: any) => {
  if (!v) return "";
  const d = new Date(v);
  return isNaN(d.getTime())
    ? String(v)
    : d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
};

const STATUS_META: { key: keyof DashboardData["orderStatus"]; label: string; color: string }[] = [
  { key: "pending", label: "Pending", color: "#F29900" },
  { key: "processing", label: "Processing", color: "#1A73E8" },
  { key: "shipped", label: "Shipped", color: "#8E67E8" },
  { key: "delivered", label: "Delivered", color: "#188038" },
  { key: "cancelled", label: "Cancelled", color: "#D93025" },
];

const WEEK_ORDER = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

/* --------------------------- UI primitives -------------------------- */
function Card({
  title,
  subtitle,
  children,
  className = "",
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`bg-white border border-[#E8EAED] rounded-2xl p-5 ${className}`}>
      <div className="mb-4">
        <h2 className="text-[15px] font-semibold text-[#1F1F1F]">{title}</h2>
        {subtitle && <p className="text-[12.5px] text-[#5F6368] mt-0.5">{subtitle}</p>}
      </div>
      {children}
    </section>
  );
}

function Empty({ icon: Icon, title, text }: { icon: any; title: string; text: string }) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-8 px-4">
      <div className="w-11 h-11 rounded-full bg-[#F1F3F4] flex items-center justify-center mb-3">
        <Icon size={20} className="text-[#5F6368]" />
      </div>
      <p className="text-[14px] font-medium text-[#1F1F1F]">{title}</p>
      <p className="text-[13px] text-[#5F6368] mt-1 max-w-[260px]">{text}</p>
    </div>
  );
}

function Delta({ value }: { value: number | null }) {
  if (value === null)
    return <span className="text-[12px] text-[#5F6368]">No earlier data to compare</span>;
  if (value === 0)
    return (
      <span className="inline-flex items-center gap-1 text-[12px] text-[#5F6368]">
        <Minus size={13} /> No change
      </span>
    );
  const up = value > 0;
  return (
    <span
      className={`inline-flex items-center gap-0.5 text-[12px] font-medium ${
        up ? "text-[#188038]" : "text-[#D93025]"
      }`}
    >
      {up ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
      {Math.abs(value).toFixed(1)}%
      <span className="text-[#5F6368] font-normal ml-1">vs previous</span>
    </span>
  );
}

function Kpi({
  label,
  value,
  icon: Icon,
  tint,
  footer,
}: {
  label: string;
  value: string;
  icon: any;
  tint: string;
  footer: React.ReactNode;
}) {
  return (
    <div className="bg-white border border-[#E8EAED] rounded-2xl p-5">
      <div className="flex items-center justify-between">
        <p className="text-[13px] text-[#5F6368] font-medium">{label}</p>
        <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${tint}1A` }}>
          <Icon size={18} style={{ color: tint }} />
        </div>
      </div>
      <p className="mt-3 text-[26px] font-semibold tracking-tight text-[#1F1F1F]">{value}</p>
      <div className="mt-1 min-h-[18px]">{footer}</div>
    </div>
  );
}

function Skeleton() {
  return (
    <div className="animate-pulse space-y-5" aria-busy="true" aria-label="Loading dashboard">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="h-[128px] rounded-2xl bg-[#E8EAED]" />
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="h-80 rounded-2xl bg-[#E8EAED] lg:col-span-2" />
        <div className="h-80 rounded-2xl bg-[#E8EAED]" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-64 rounded-2xl bg-[#E8EAED]" />
        ))}
      </div>
    </div>
  );
}

const tooltipStyle = {
  borderRadius: 12,
  border: "1px solid #E8EAED",
  boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
  fontSize: 13,
};

/* ------------------------------- Page ------------------------------- */
export default function DashboardPage() {
  const router = useRouter();
  const params = useParams<{ uid?: string }>();
  const [data, setData] = useState<DashboardData | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [updatedAt, setUpdatedAt] = useState<Date | null>(null);

  const load = useCallback(
    async (isRefresh = false, signal?: AbortSignal) => {
      const uid = localStorage.getItem("aptro_uid");
      if (!uid) {
        setError("We couldn't find your business ID. Sign in again to continue.");
        setLoading(false);
        return;
      }

      isRefresh ? setRefreshing(true) : setLoading(true);
      setError("");
      try {
        const res = await fetch(dashboardEndpoint(uid), {
          method: "GET",
          credentials: "include",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("aptro_token")}`,
          },
          signal,
        });

        if (res.status === 401) {
          router.push(`/login?next=${encodeURIComponent(window.location.pathname)}`);
          return;
        }

        const json = await res.json().catch(() => null);
        if (!res.ok || !json?.success) {
          throw new Error(json?.message || "We couldn't load your dashboard.");
        }
        setData(json.data as DashboardData);
        setUpdatedAt(new Date());
      } catch (e: any) {
        if (e?.name === "AbortError") return;
        setError(
          e instanceof TypeError
            ? "Can't reach the server. Check your internet connection and try again."
            : e?.message || "Something went wrong. Try again."
        );
      } finally {
        setLoading(false);
        setRefreshing(false);
      }
    },
    [router, params?.uid]
  );

  useEffect(() => {
    const ctrl = new AbortController();
    load(false, ctrl.signal);
    return () => ctrl.abort();
  }, [load]);

  /* ---------- Derived chart data ---------- */
  const charts = useMemo(() => {
    if (!data) return null;
    const { overview, orderStatus, orderCounts, currentWeekDailyOrders } = data;

    const revenueCompare = [
      { name: "This month vs last", Current: overview.currentMonthRevenue, Previous: overview.previousMonthRevenue },
      { name: "This year vs last", Current: overview.currentYearRevenue, Previous: overview.previousYearRevenue },
    ];

    const statusData = STATUS_META.map((s) => ({
      name: s.label,
      value: orderStatus[s.key] ?? 0,
      color: s.color,
    }));
    const statusTotal = statusData.reduce((a, b) => a + b.value, 0);

    const week = WEEK_ORDER.map((d) => ({ day: d, Orders: currentWeekDailyOrders?.[d] ?? 0 }));
    const weekTotal = week.reduce((a, b) => a + b.Orders, 0);

    const periods = [
      { name: "Today", Orders: orderCounts.today },
      { name: "Yesterday", Orders: orderCounts.yesterday },
      { name: "This week", Orders: orderCounts.currentWeek },
      { name: "This month", Orders: orderCounts.thisMonth },
      { name: "Last month", Orders: orderCounts.lastMonth },
      { name: "This year", Orders: orderCounts.thisYear },
      { name: "Last year", Orders: orderCounts.lastYear },
    ];

    const deliveredRate = statusTotal ? (orderStatus.delivered / statusTotal) * 100 : 0;
    const avgOrderValue = orderCounts.thisYear ? overview.currentYearRevenue / orderCounts.thisYear : 0;

    return { revenueCompare, statusData, statusTotal, week, weekTotal, periods, deliveredRate, avgOrderValue };
  }, [data]);

  /* ----------------------------- Render ----------------------------- */
  return (
    <div className={`min-h-screen bg-[#F8F9FA] ${jakarta.className}`}>
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Header */}
        <header className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div>
            <h1 className="text-[24px] sm:text-[28px] font-semibold tracking-tight text-[#1F1F1F]">Dashboard</h1>
            <p className="text-[13.5px] text-[#5F6368] mt-0.5">
              {updatedAt
                ? `Updated ${updatedAt.toLocaleTimeString("en-IN", { hour: "numeric", minute: "2-digit" })}`
                : "Your sales and orders at a glance"}
            </p>
          </div>
          <button
            type="button"
            onClick={() => load(true)}
            disabled={loading || refreshing}
            className="inline-flex items-center gap-2 h-10 px-4 bg-white border border-[#DADCE0] rounded-xl text-[13.5px] font-medium text-[#1F1F1F] hover:bg-[#F1F3F4] disabled:opacity-60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A73E8]"
          >
            <RefreshCw size={15} className={refreshing ? "animate-spin" : ""} />
            Refresh
          </button>
        </header>

        {loading && <Skeleton />}

        {!loading && error && !data && (
          <div role="alert" className="bg-white border border-[#E8EAED] rounded-2xl p-10 text-center">
            <div className="mx-auto w-12 h-12 rounded-full bg-[#FCE8E6] flex items-center justify-center mb-4">
              <AlertCircle className="text-[#D93025]" size={22} />
            </div>
            <h2 className="text-[17px] font-semibold text-[#1F1F1F]">Dashboard didn’t load</h2>
            <p className="text-[14px] text-[#5F6368] mt-1 mb-5">{error}</p>
            <button
              onClick={() => load()}
              className="h-10 px-5 bg-[#1A73E8] hover:bg-[#1557B0] text-white text-[14px] font-semibold rounded-xl transition-colors"
            >
              Try again
            </button>
          </div>
        )}

        {/* Refresh failed but we still have old data */}
        {data && error && (
          <div
            role="alert"
            className="mb-4 flex items-center gap-2 rounded-xl border border-[#F5C6C2] bg-[#FCE8E6] px-4 py-2.5 text-[13px] text-[#B3261E]"
          >
            <AlertCircle size={16} /> {error} Showing the last loaded data.
          </div>
        )}

        {data && charts && (
          <div className="space-y-5">
            {/* ---------- KPI row ---------- */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
              <Kpi
                label="Today’s revenue"
                value={fmtMoney(data.overview.todayRevenue)}
                icon={IndianRupee}
                tint="#188038"
                footer={
                  <span className="text-[12px] text-[#5F6368]">
                    {data.overview.todayRevenue ? "Earned so far today" : "No sales yet today"}
                  </span>
                }
              />
              <Kpi
                label="Today’s orders"
                value={String(data.overview.todayOrderCount)}
                icon={ShoppingBag}
                tint="#1A73E8"
                footer={
                  <span className="text-[12px] text-[#5F6368]">
                    Yesterday: {data.orderCounts.yesterday} · This week: {data.orderCounts.currentWeek}
                  </span>
                }
              />
              <Kpi
                label="This month"
                value={fmtMoney(data.overview.currentMonthRevenue)}
                icon={CalendarClock}
                tint="#8E67E8"
                footer={<Delta value={pctChange(data.overview.currentMonthRevenue, data.overview.previousMonthRevenue)} />}
              />
              <Kpi
                label="This year"
                value={fmtMoney(data.overview.currentYearRevenue)}
                icon={TrendingUp}
                tint="#F29900"
                footer={<Delta value={pctChange(data.overview.currentYearRevenue, data.overview.previousYearRevenue)} />}
              />
            </div>

            {/* ---------- Revenue + Status ---------- */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <Card
                title="Revenue comparison"
                subtitle={`Last month: ${fmtMoney(data.overview.previousMonthRevenue)} · Last year: ${fmtMoney(
                  data.overview.previousYearRevenue
                )}`}
                className="lg:col-span-2"
              >
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={charts.revenueCompare} barGap={8} margin={{ left: 0, right: 8, top: 8 }}>
                      <CartesianGrid vertical={false} stroke="#F1F3F4" />
                      <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: "#5F6368" }} />
                      <YAxis
                        tickLine={false}
                        axisLine={false}
                        width={56}
                        tick={{ fontSize: 12, fill: "#5F6368" }}
                        tickFormatter={fmtShortMoney}
                      />
                      <Tooltip formatter={(v) => fmtMoney(Number(v ?? 0))} contentStyle={tooltipStyle} cursor={{ fill: "#F8F9FA" }} />
                      <Legend iconType="circle" wrapperStyle={{ fontSize: 12.5 }} />
                      <Bar dataKey="Current" name="Current period" fill="#1A73E8" radius={[8, 8, 0, 0]} maxBarSize={56} />
                      <Bar dataKey="Previous" name="Previous period" fill="#A8C7FA" radius={[8, 8, 0, 0]} maxBarSize={56} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </Card>

              <Card title="Order status" subtitle={`${charts.statusTotal} orders in total`}>
                {charts.statusTotal === 0 ? (
                  <Empty icon={Package} title="No orders yet" text="Order statuses will show up here once you get orders." />
                ) : (
                  <>
                    <div className="h-48 relative">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={charts.statusData.filter((s) => s.value > 0)}
                            dataKey="value"
                            nameKey="name"
                            innerRadius={56}
                            outerRadius={82}
                            paddingAngle={2}
                            stroke="none"
                          >
                            {charts.statusData
                              .filter((s) => s.value > 0)
                              .map((s) => (
                                <Cell key={s.name} fill={s.color} />
                              ))}
                          </Pie>
                          <Tooltip contentStyle={tooltipStyle} />
                        </PieChart>
                      </ResponsiveContainer>
                      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                        <span className="text-[22px] font-semibold text-[#1F1F1F]">{charts.deliveredRate.toFixed(0)}%</span>
                        <span className="text-[12px] text-[#5F6368]">delivered</span>
                      </div>
                    </div>
                    <ul className="mt-3 space-y-1.5">
                      {charts.statusData.map((s) => (
                        <li key={s.name} className="flex items-center justify-between text-[13px]">
                          <span className="flex items-center gap-2 text-[#3C4043]">
                            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: s.color }} />
                            {s.name}
                          </span>
                          <span className="font-medium text-[#1F1F1F]">{s.value}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </Card>
            </div>

            {/* ---------- Week + Periods ---------- */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <Card title="Orders this week" subtitle={`${charts.weekTotal} orders from Monday to Sunday`}>
                <div className="h-60 relative">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={charts.week} margin={{ left: -16, right: 8, top: 8 }}>
                      <defs>
                        <linearGradient id="weekFill" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#1A73E8" stopOpacity={0.25} />
                          <stop offset="100%" stopColor="#1A73E8" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid vertical={false} stroke="#F1F3F4" />
                      <XAxis dataKey="day" tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: "#5F6368" }} />
                      <YAxis allowDecimals={false} tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: "#5F6368" }} />
                      <Tooltip contentStyle={tooltipStyle} />
                      <Area type="monotone" dataKey="Orders" stroke="#1A73E8" strokeWidth={2.5} fill="url(#weekFill)" />
                    </AreaChart>
                  </ResponsiveContainer>
                  {charts.weekTotal === 0 && (
                    <p className="absolute inset-x-0 top-1/3 text-center text-[13px] text-[#5F6368]">
                      No orders yet this week
                    </p>
                  )}
                </div>
              </Card>

              <Card
                title="Orders by period"
                subtitle={`${data.orderCounts.totalOrder} orders all time · Average order ${fmtMoney(charts.avgOrderValue)}`}
              >
                <div className="h-60">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={charts.periods} margin={{ left: -16, right: 8, top: 8 }}>
                      <CartesianGrid vertical={false} stroke="#F1F3F4" />
                      <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fontSize: 11.5, fill: "#5F6368" }} interval={0} />
                      <YAxis allowDecimals={false} tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: "#5F6368" }} />
                      <Tooltip contentStyle={tooltipStyle} cursor={{ fill: "#F8F9FA" }} />
                      <Bar dataKey="Orders" fill="#188038" radius={[6, 6, 0, 0]} maxBarSize={36} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </Card>
            </div>

            {/* ---------- Lists ---------- */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Top products */}
              <Card title="Top products" subtitle="Best sellers by units sold">
                {data.topProducts?.length ? (
                  <ul className="space-y-4">
                    {(() => {
                      const qty = (p: Row) => Number(first(p, ["totalQuantity", "totalSold", "quantity", "soldCount", "count", "orders"], 0));
                      const max = Math.max(...data.topProducts.map(qty), 1);
                      return data.topProducts.map((p, i) => {
                        const name = String(first(p, ["name", "productName", "title"], first(p.product ?? {}, ["name", "title"], "Product")));
                        const revenue = first(p, ["totalRevenue", "revenue", "totalAmount", "amount"]);
                        return (
                          <li key={p._id ?? p.id ?? i}>
                            <div className="flex items-center justify-between gap-3 text-[13.5px]">
                              <span className="font-medium text-[#1F1F1F] truncate">{name}</span>
                              <span className="text-[#5F6368] shrink-0">
                                {qty(p)} sold{revenue !== undefined ? ` · ${fmtMoney(Number(revenue))}` : ""}
                              </span>
                            </div>
                            <div className="mt-1.5 h-2 rounded-full bg-[#F1F3F4] overflow-hidden">
                              <div className="h-full rounded-full bg-[#1A73E8]" style={{ width: `${(qty(p) / max) * 100}%` }} />
                            </div>
                          </li>
                        );
                      });
                    })()}
                  </ul>
                ) : (
                  <Empty icon={Package} title="No top products yet" text="Your best sellers will appear after your first sales." />
                )}
              </Card>

              {/* Upcoming deliveries */}
              <Card title="Upcoming deliveries" subtitle="Orders on their way to customers">
                {data.upcomingDelivery?.length ? (
                  <ul className="divide-y divide-[#F1F3F4] -my-2">
                    {data.upcomingDelivery.slice(0, 6).map((d, i) => {
                      const id = first(d, ["orderNumber", "orderId", "_id", "id"], `#${i + 1}`);
                      const customer = first(d, ["customerName", "name"], first(d.customer ?? {}, ["name", "fullName"], "Customer"));
                      const date = first(d, ["deliveryDate", "expectedDelivery", "estimatedDelivery", "date"]);
                      const place = first(d, ["city", "address"], "");
                      return (
                        <li key={String(id) + i} className="flex items-center gap-3 py-3">
                          <div className="w-9 h-9 rounded-xl bg-[#E8F0FE] flex items-center justify-center shrink-0">
                            <Truck size={17} className="text-[#1A73E8]" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-[13.5px] font-medium text-[#1F1F1F] truncate">{String(customer)}</p>
                            <p className="text-[12px] text-[#5F6368] truncate">
                              {String(id)}
                              {place ? ` · ${place}` : ""}
                            </p>
                          </div>
                          {date && <span className="text-[12px] text-[#5F6368] shrink-0">{fmtDate(date)}</span>}
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <Empty icon={Truck} title="Nothing to deliver" text="No deliveries are scheduled right now." />
                )}
              </Card>

              {/* New customers */}
              <Card title="New customers" subtitle={`${data.newCustomers?.count ?? 0} joined recently`}>
                {data.newCustomers?.data?.length ? (
                  <ul className="divide-y divide-[#F1F3F4] -my-2">
                    {data.newCustomers.data.slice(0, 6).map((c, i) => {
                      const name = String(
                        first(c, ["name", "fullName"], [c.firstName, c.lastName].filter(Boolean).join(" ") || "Customer")
                      );
                      const sub = first(c, ["email", "phone", "mobile"], "");
                      const joined = first(c, ["createdAt", "joinedAt", "date"]);
                      return (
                        <li key={c._id ?? c.id ?? i} className="flex items-center gap-3 py-3">
                          <div className="w-9 h-9 rounded-full bg-[#E6F4EA] text-[#188038] flex items-center justify-center text-[13px] font-semibold shrink-0">
                            {initials(name)}
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-[13.5px] font-medium text-[#1F1F1F] truncate">{name}</p>
                            {sub && <p className="text-[12px] text-[#5F6368] truncate">{String(sub)}</p>}
                          </div>
                          {joined && <span className="text-[12px] text-[#5F6368] shrink-0">{fmtDate(joined)}</span>}
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <Empty icon={UserPlus} title="No new customers" text="New sign-ups will show up here." />
                )}
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}