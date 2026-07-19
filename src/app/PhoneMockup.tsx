"use client";

import { useRef } from "react";
import {
	BatteryFull,
	BatteryWarning,
	Bell,
	Building2,
	Camera,
	CheckCircle2,
	ChevronRight,
	ClipboardList,
	Droplets,
	FileCheck2,
	FileText,
	FireExtinguisher,
	MapPin,
	QrCode,
	Signal,
	Wifi,
} from "lucide-react";

/*
	White-label dashboard mockup with deliberately plain demo data (Fire Protection Co.):
	an AS 1851 testing round with defect flags and an auto-generated compliance report —
	the kind of deliverable off-the-shelf apps can't do.
	Interactive for the fun of it: the list scrolls (wheel, touch, or mouse drag) and
	every control has a press state, but nothing navigates anywhere.
*/

// AS 1851 splits defects into critical and non-critical — real trade language.
const defects = [
	{
		icon: FireExtinguisher,
		title: "Extinguisher L2-04",
		fault: "Low pressure",
		meta: "Recharge or replace",
		photos: 2,
		severity: "critical",
	},
	{
		icon: BatteryWarning,
		title: "Exit light G-11",
		fault: "Discharge test failed",
		meta: "Replace battery",
		photos: 1,
		severity: "critical",
	},
	{
		icon: Droplets,
		title: "Hose reel B-02",
		fault: "Signage missing",
		meta: "Fix within 30 days",
		photos: 1,
		severity: "non-critical",
	},
] as const;

const completed = [
	{ title: "Extinguisher L2-01", meta: "Pressure OK · Signage OK" },
	{ title: "Extinguisher L2-02", meta: "Pressure OK · Hose OK" },
	{ title: "Exit light G-09", meta: "Discharge test passed" },
	{ title: "Smoke door D-04", meta: "Closure test passed" },
	{ title: "Hose reel B-01", meta: "Flow test passed" },
] as const;

const tabs = [
	{ icon: Building2, label: "Sites", active: false },
	{ icon: ClipboardList, label: "Rounds", active: true },
	{ icon: QrCode, label: "Assets", active: false },
	{ icon: FileText, label: "Reports", active: false },
] as const;

const PhoneMockup = () => {
	const listRef = useRef<HTMLDivElement>(null);
	const drag = useRef<{ startY: number; startScrollTop: number } | null>(null);

	// Touch scrolls natively; this adds phone-style drag scrolling for mouse users.
	const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
		if (e.pointerType !== "mouse" || !listRef.current) return;
		drag.current = { startY: e.clientY, startScrollTop: listRef.current.scrollTop };
	};

	const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
		if (!drag.current || !listRef.current) return;
		listRef.current.scrollTop = drag.current.startScrollTop - (e.clientY - drag.current.startY);
	};

	return (
		<div className="relative w-[270px] rounded-[2.5rem] border-[6px] border-stone-900 bg-stone-900 shadow-2xl">
			<div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-stone-900"></div>
			<div className="flex h-[540px] flex-col overflow-hidden rounded-[2.1rem] bg-stone-100">

				{/* Status bar */}
				<div className="flex items-center justify-between bg-white px-6 pb-1 pt-2.5">
					<p className="text-[10px] font-semibold tabular-nums tracking-tight text-stone-900">9:41</p>
					<div className="flex items-center gap-1 text-stone-900">
						<Signal className="h-2.5 w-2.5" strokeWidth={2.5} />
						<Wifi className="h-2.5 w-2.5" strokeWidth={2.5} />
						<BatteryFull className="h-3 w-3" strokeWidth={2} />
					</div>
				</div>

				{/* App header */}
				<div className="flex items-center justify-between bg-white px-4 pb-3 pt-1.5">
					<div className="flex items-center gap-2.5">
						<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-700 text-[11px] font-extrabold tracking-tight text-white shadow-sm">FP</div>
						<div>
							<p className="text-[12px] font-bold leading-tight tracking-tight text-stone-900">Fire Protection Co.</p>
							<p className="mt-px flex items-center gap-1 text-[10px] leading-tight text-stone-500">
								<span className="h-1 w-1 rounded-full bg-emerald-500"></span>
								Synced 4 min ago
							</p>
						</div>
					</div>
					<div className="flex items-center gap-1.5">
						<button type="button" aria-label="Notifications" className="relative flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-stone-100 text-stone-500 transition hover:bg-stone-200 hover:text-stone-700 active:scale-90">
							<Bell className="h-3.5 w-3.5" strokeWidth={2} />
							<span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-red-600 ring-2 ring-white"></span>
						</button>
						<button type="button" aria-label="Profile" className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-stone-900 text-[9px] font-bold text-white transition hover:bg-stone-700 active:scale-90">MJ</button>
					</div>
				</div>

				{/* Scrollable screen: site progress card + defect list */}
				<div
					ref={listRef}
					onPointerDown={onPointerDown}
					onPointerMove={onPointerMove}
					onPointerUp={() => (drag.current = null)}
					onPointerLeave={() => (drag.current = null)}
					className="no-scrollbar flex-1 select-none space-y-1.5 overflow-y-auto overscroll-contain px-4 pb-3 pt-3"
				>
					{/* Site progress card */}
					<div className="w-full rounded-xl bg-white p-3 text-left shadow-sm ring-1 ring-stone-900/5">
						<div className="flex items-center justify-between">
							<p className="text-[11px] font-bold tracking-tight text-stone-900">Distribution centre</p>
							<p className="flex items-center gap-0.5 text-[10px] font-medium text-stone-500">
								<MapPin className="h-2.5 w-2.5" strokeWidth={2} />
								Ipswich
							</p>
						</div>
						<div className="mt-2.5 flex items-center gap-2">
							<div className="h-1.5 flex-1 overflow-hidden rounded-full bg-stone-100 ring-1 ring-inset ring-stone-900/5">
								<div className="h-full w-[67%] rounded-full bg-red-700"></div>
							</div>
							<p className="text-[10px] font-bold tabular-nums text-stone-900">67%</p>
						</div>
						<p className="mt-1.5 text-[10px] font-medium tabular-nums text-stone-500">112 of 168 assets tested · 3 defects flagged</p>
						<button type="button" className="mt-2.5 flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-lg bg-red-700 py-2 text-[10px] font-bold text-white shadow-sm transition hover:bg-red-800 active:scale-[0.98]">
							<QrCode className="h-3 w-3" strokeWidth={2.5} />
							Scan next asset
						</button>
					</div>

					<div className="flex items-baseline justify-between pb-px pt-2">
						<p className="text-[10px] font-bold uppercase tracking-wider text-stone-500">Flagged this round</p>
						<button type="button" className="cursor-pointer text-[10px] font-semibold text-red-700 transition hover:text-red-800 active:opacity-60">View all</button>
					</div>
					{defects.map((defect) => (
						<button type="button" key={defect.title} className="flex w-full cursor-pointer items-center gap-2.5 rounded-xl bg-white p-2.5 text-left shadow-sm ring-1 ring-stone-900/5 transition hover:ring-stone-900/10 active:scale-[0.98]">
							<div className={`flex h-8 w-8 flex-none items-center justify-center rounded-lg ${defect.severity === "critical" ? "bg-red-50 text-red-700" : "bg-amber-50 text-amber-600"}`}>
								<defect.icon className="h-4 w-4" strokeWidth={2} />
							</div>
							<div className="min-w-0 flex-1">
								<div className="flex items-center justify-between gap-2">
									<p className="truncate text-[11px] font-bold tracking-tight text-stone-900">{defect.title}</p>
									<span className={`flex-none rounded-full px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wide ring-1 ring-inset ${defect.severity === "critical" ? "bg-red-50 text-red-700 ring-red-600/20" : "bg-amber-50 text-amber-700 ring-amber-600/20"}`}>
										{defect.severity}
									</span>
								</div>
								<p className="mt-0.5 flex items-start justify-between gap-2 text-[10px] text-stone-500">
									<span className="min-w-0 flex-1 leading-snug">{defect.fault} · {defect.meta}</span>
									<span className="flex flex-none items-center gap-0.5 tabular-nums">
										<Camera className="h-2.5 w-2.5" strokeWidth={2} />
										{defect.photos}
									</span>
								</p>
							</div>
						</button>
					))}

					{/* Compliance report card */}
					<div className="mt-3 rounded-xl bg-emerald-50 p-2.5 ring-1 ring-inset ring-emerald-600/15">
						<div className="flex items-center gap-2.5">
							<div className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-emerald-600 text-white shadow-sm">
								<FileCheck2 className="h-4 w-4" strokeWidth={2} />
							</div>
							<div className="min-w-0 flex-1">
								<div className="flex items-center justify-between gap-2">
									<p className="whitespace-nowrap text-[11px] font-bold tracking-tight text-emerald-900">Compliance report</p>
									<button type="button" className="flex flex-none cursor-pointer items-center gap-0.5 rounded-md bg-white px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wide text-emerald-700 shadow-sm ring-1 ring-inset ring-emerald-600/20 transition hover:bg-emerald-100 active:scale-95">
										Preview PDF
										<ChevronRight className="h-2 w-2" strokeWidth={3} />
									</button>
								</div>
								<p className="mt-0.5 text-[10px] leading-snug text-emerald-700">Generated when the round closes, with a quote for the three defects.</p>
							</div>
						</div>
					</div>

					{/* Completed today */}
					<p className="pb-1.5 pt-3 text-[10px] font-bold uppercase tracking-wider text-stone-500">Completed today</p>
					{completed.map((item) => (
						<button type="button" key={item.title} className="flex w-full cursor-pointer items-center gap-2.5 rounded-xl bg-white p-2.5 text-left shadow-sm ring-1 ring-stone-900/5 transition hover:ring-stone-900/10 active:scale-[0.98]">
							<div className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-stone-100 text-emerald-600">
								<CheckCircle2 className="h-4 w-4" strokeWidth={2} />
							</div>
							<div className="min-w-0 flex-1">
								<p className="truncate text-[11px] font-bold tracking-tight text-stone-900">{item.title}</p>
								<p className="mt-0.5 truncate text-[10px] text-stone-500">{item.meta}</p>
							</div>
							<ChevronRight className="h-3 w-3 flex-none text-stone-300" strokeWidth={2} />
						</button>
					))}
				</div>

				{/* Tab bar */}
				<div className="border-t border-stone-200 bg-white px-2 pt-2">
					<div className="grid grid-cols-4">
						{tabs.map((tab) => (
							<button type="button" key={tab.label} className={`flex cursor-pointer flex-col items-center gap-0.5 rounded-lg py-0.5 transition active:scale-90 ${tab.active ? "text-red-700" : "text-stone-400 hover:text-stone-600"}`}>
								<tab.icon className="h-4 w-4" strokeWidth={tab.active ? 2.25 : 2} />
								<p className={`text-[9px] ${tab.active ? "font-bold" : "font-medium"}`}>{tab.label}</p>
							</button>
						))}
					</div>
					<div className="mx-auto mb-1.5 mt-2 h-1 w-24 rounded-full bg-stone-900/90"></div>
				</div>
			</div>
		</div>
	);
};

export default PhoneMockup;
