import Image from "next/image";
import EmailReveal from "./EmailReveal";

/*
	TO ADD ONCE AVAILABLE:
	1. Hero testimonial — client photo, name, company, and quote. Removed for launch (no AU clients yet);
	   the card's markup lives in mockup.html under "PLACEHOLDER: hero testimonial".
	(Phone mockup is done: a white-label dashboard with plain demo data, Fire Protection Co. Swap for a real screenshot if one becomes available.)
	(Founder's note photo is done. Contact details are done: the phone number is shown openly in the header, final CTA, sticky mobile bar and footer;
	the email stays click-to-reveal via the EmailReveal component to keep it away from scraper bots.
	Google Calendar booking embed is live at #book.)
*/

const PhoneIcon = (props: { className: string }) => (
	<svg className={props.className} fill="currentColor" viewBox="0 0 20 20">
		<path
			fillRule="evenodd"
			d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
			clipRule="evenodd"
		/>
	</svg>
);

const CheckIcon = (props: { className: string }) => (
	<svg className={props.className} fill="currentColor" viewBox="0 0 20 20">
		<path
			fillRule="evenodd"
			d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
			clipRule="evenodd"
		/>
	</svg>
);

const CrossIcon = (props: { className: string }) => (
	<svg className={props.className} fill="currentColor" viewBox="0 0 20 20">
		<path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
	</svg>
);

const ChevronIcon = () => (
	<svg
		className="faq-chevron h-5 w-5 flex-none text-stone-400 transition-transform"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		viewBox="0 0 24 24"
	>
		<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
	</svg>
);

const Page = () => {
	return (
		<>
			{/* ============ HEADER ============ */}
			<header className="sticky top-0 z-40 border-b border-stone-200/80 bg-stone-50/90 backdrop-blur">
				<div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
					<a href="#top" className="flex items-center">
						<Image src="/assets/logo-text-dark.png" alt="Zeltta" width={1459} height={703} className="h-8 w-auto" priority />
					</a>
					<div className="flex items-center gap-5">
						<a href="tel:+61425438868" className="hidden items-center gap-2 text-sm font-bold text-stone-900 transition hover:text-stone-600 sm:flex">
							<PhoneIcon className="h-4 w-4" />
							0425 438 868
						</a>
						<a href="#book" className="hidden rounded-lg bg-yellow-400 px-4 py-2 text-sm font-bold text-stone-950 shadow-sm transition hover:bg-yellow-300 sm:inline-block">Book a 20-min chat</a>
						<a href="#book" className="rounded-lg bg-yellow-400 px-3 py-1.5 text-sm font-bold text-stone-950 sm:hidden">Book a chat →</a>
					</div>
				</div>
			</header>

			<main id="top">

				{/* ============ HERO ============ */}
				<section className="mx-auto max-w-6xl px-5 pb-16 pt-14 sm:pt-20">
					<div className="grid items-center gap-12 lg:grid-cols-2">
						<div>
							<p className="mb-4 inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-3 py-1 text-xs font-bold uppercase tracking-wide text-stone-700">
								<span className="h-1.5 w-1.5 rounded-full bg-yellow-400 ring-1 ring-stone-900/20"></span>
								South East Queensland
							</p>
							<h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-stone-950 sm:text-5xl">
								I build software around how you run jobs. <span className="bg-yellow-300 box-decoration-clone px-1">Owned by you. Forever.</span>
							</h1>
							<p className="mt-5 max-w-xl text-lg leading-relaxed text-stone-600">
								For trade businesses. Fixed quote, from $12k, live in weeks. No per-user fees. Built in Brisbane, start to finish.
							</p>
							<p className="mt-3 text-sm font-medium text-stone-500">
								Ideal for owner-operated trade and field-service crews of roughly 3–20 people.
							</p>
							<div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
								<a href="#book" className="w-full rounded-xl bg-yellow-400 px-6 py-4 text-center text-base font-bold text-stone-950 shadow-md transition hover:bg-yellow-300 sm:w-auto">Book a 20-min chat. No pitch, no obligation</a>
								<span className="text-sm text-stone-500">Two build slots a month.</span>
							</div>
							<p className="mt-8 flex items-center gap-3 border-t border-stone-200 pt-6 text-sm font-medium text-stone-600">
								<CheckIcon className="h-5 w-5 flex-none text-stone-900" />
								100+ NZ companies run their day-to-day operations on software I built.
							</p>
						</div>

						{/* Phone mockup + hero testimonial */}
						<div className="flex flex-col items-center gap-8">
							<div className="relative w-[270px] rounded-[2.5rem] border-[6px] border-stone-900 bg-stone-900 shadow-2xl">
								<div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-stone-900"></div>
								{/* White-label dashboard mockup with deliberately plain demo data (Fire Protection Co.): an AS 1851 testing round
								    with defect flags and an auto-generated compliance report — the kind of deliverable off-the-shelf apps can't do. */}
								<div className="flex h-[540px] flex-col overflow-hidden rounded-[2.1rem] bg-stone-100 pt-7">
									<div className="flex items-center justify-between bg-white px-4 pb-3 pt-2">
										<div className="flex items-center gap-2">
											<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-700 text-[11px] font-extrabold text-white">FP</div>
											<div>
												<p className="text-[12px] font-bold leading-tight text-stone-900">Fire Protection Co.</p>
												<p className="text-[10px] leading-tight text-stone-500">Six-monthly test round · in progress</p>
											</div>
										</div>
										<div className="flex h-7 w-7 items-center justify-center rounded-full bg-stone-100 text-[10px] font-bold text-stone-600">MJ</div>
									</div>
									<div className="mx-4 mt-3 rounded-lg bg-white p-3">
										<div className="flex items-center justify-between">
											<p className="text-[11px] font-bold text-stone-900">Distribution centre</p>
											<p className="text-[10px] text-stone-500">Ipswich</p>
										</div>
										<div className="mt-2 h-1.5 w-full rounded-full bg-stone-200">
											<div className="h-1.5 w-[67%] rounded-full bg-red-700"></div>
										</div>
										<p className="mt-1.5 text-[10px] font-medium text-stone-500">112 of 168 assets tested · 3 defects flagged</p>
									</div>
									<p className="px-4 pb-1.5 pt-3 text-[10px] font-bold uppercase tracking-wide text-stone-500">Flagged this round</p>
									<div className="flex-1 space-y-2 overflow-hidden px-4">
										<div className="rounded-lg bg-white p-2.5">
											<div className="flex items-center justify-between">
												<p className="text-[11px] font-bold text-stone-900">Extinguisher L2-04 · Low pressure</p>
												<span className="rounded-full bg-red-100 px-1.5 py-0.5 text-[8px] font-bold text-red-700">CRITICAL</span>
											</div>
											<p className="mt-0.5 text-[10px] text-stone-500">Replace now · 2 photos · AS 1851</p>
										</div>
										<div className="rounded-lg bg-white p-2.5">
											<div className="flex items-center justify-between">
												<p className="text-[11px] font-bold text-stone-900">Exit light G-11 · Battery failed</p>
												<span className="rounded-full bg-red-100 px-1.5 py-0.5 text-[8px] font-bold text-red-700">CRITICAL</span>
											</div>
											<p className="mt-0.5 text-[10px] text-stone-500">90-min discharge test · 1 photo</p>
										</div>
										<div className="rounded-lg bg-white p-2.5">
											<div className="flex items-center justify-between">
												<p className="text-[11px] font-bold text-stone-900">Hose reel B-02 · Nozzle seized</p>
												<span className="rounded-full bg-amber-100 px-1.5 py-0.5 text-[8px] font-bold text-amber-700">MINOR</span>
											</div>
											<p className="mt-0.5 text-[10px] text-stone-500">Fix within 30 days · 1 photo</p>
										</div>
										<div className="mt-3 rounded-lg border border-emerald-200 bg-emerald-50 p-2.5">
											<div className="flex items-center justify-between">
												<p className="text-[11px] font-bold text-emerald-800">Compliance report</p>
												<span className="rounded-md bg-emerald-600 px-2 py-0.5 text-[8px] font-bold text-white">PREVIEW PDF</span>
											</div>
											<p className="mt-0.5 text-[10px] text-emerald-700">Generated when the round closes, with a quote for the three defects.</p>
										</div>
									</div>
									<div className="grid grid-cols-4 border-t border-stone-200 bg-white px-2 py-2.5">
										<p className="text-center text-[9px] font-medium text-stone-400">Sites</p>
										<p className="text-center text-[9px] font-bold text-red-700">Rounds</p>
										<p className="text-center text-[9px] font-medium text-stone-400">Assets</p>
										<p className="text-center text-[9px] font-medium text-stone-400">Reports</p>
									</div>
								</div>
							</div>
							<p className="-mt-3 text-center text-xs text-stone-500">Example</p>
						</div>
					</div>
				</section>

				{/* ============ CLIENT LOGOS ============ */}
				<section className="border-t border-stone-200">
					<div className="mx-auto max-w-6xl px-5 py-10">
						<p className="text-center text-xs font-bold uppercase tracking-widest text-stone-500">A few of the companies I&rsquo;ve built software for</p>
						<div className="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14">
							<Image src="/assets/client-star-safety.png" alt="Star Safety" width={720} height={501} className="h-11 w-auto opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 sm:h-12" />
							<Image src="/assets/client-saferack.png" alt="Safe Rack" width={640} height={640} className="h-11 w-auto opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 sm:h-12" />
							<Image src="/assets/client-schick.png" alt="Schick Civil Construction" width={1536} height={305} className="h-8 w-auto opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 sm:h-9" />
							<Image src="/assets/client-jb-hifi.png" alt="JB Hi-Fi" width={302} height={167} className="h-9 w-auto opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 sm:h-10" />
							<Image src="/assets/client-game-kings.png" alt="Game Kings" width={599} height={173} className="h-8 w-auto opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 sm:h-9" />
							<Image src="/assets/client-autism-nz.png" alt="Autism NZ" width={575} height={250} className="h-9 w-auto opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 sm:h-10" />
						</div>
					</div>
				</section>

				{/* ============ PAIN ============ */}
				<section className="border-y border-stone-200 bg-white">
					<div className="mx-auto max-w-3xl px-5 py-16 sm:py-20">
						<h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">Sound familiar?</h2>
						<ul className="mt-8 space-y-5">
							<li className="flex gap-4 text-lg leading-relaxed text-stone-700">
								<span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-stone-900"></span>
								You&rsquo;re quoting at 10pm because the whole day was spent on site.
							</li>
							<li className="flex gap-4 text-lg leading-relaxed text-stone-700">
								<span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-stone-900"></span>
								Your real pricing lives in a spreadsheet. The app just turns it into a PDF.
							</li>
							<li className="flex gap-4 text-lg leading-relaxed text-stone-700">
								<span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-stone-900"></span>
								The one feature you need is locked two price tiers up.
							</li>
							<li className="flex gap-4 text-lg leading-relaxed text-stone-700">
								<span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-stone-900"></span>
								You&rsquo;re chasing invoices for work you finished a month ago.
							</li>
							<li className="flex gap-4 text-lg leading-relaxed text-stone-700">
								<span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-stone-900"></span>
								Every job gets handled twice: written up on site, typed up again at home.
							</li>
						</ul>
						<div className="mt-10 rounded-2xl border-l-4 border-yellow-400 bg-stone-50 p-6 sm:p-8">
							<p className="text-lg font-semibold leading-relaxed text-stone-900">
								If you&rsquo;ve tried ServiceM8 or simPRO and ended up bending your business around someone else&rsquo;s template, you&rsquo;re exactly who I build for.
							</p>
						</div>
						<div className="mt-10">
							<a href="#book" className="inline-block rounded-xl bg-yellow-400 px-6 py-3.5 text-base font-bold text-stone-950 shadow-md transition hover:bg-yellow-300">See a working system on my phone</a>
						</div>
					</div>
				</section>

				{/* ============ HOW IT WORKS ============ */}
				<section className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
					<h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">How it works</h2>
					<div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
						<div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
							<span className="inline-block bg-yellow-300 px-2 py-0.5 text-xs font-bold uppercase tracking-wide text-stone-950">Step 1</span>
							<p className="mt-3 text-base leading-relaxed text-stone-700">A 20-minute chat, and a demo of a working system on my phone.</p>
						</div>
						<div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
							<span className="inline-block bg-yellow-300 px-2 py-0.5 text-xs font-bold uppercase tracking-wide text-stone-950">Step 2</span>
							<p className="mt-3 text-base leading-relaxed text-stone-700">You get a fixed quote in writing inside a week.</p>
						</div>
						<div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
							<span className="inline-block bg-yellow-300 px-2 py-0.5 text-xs font-bold uppercase tracking-wide text-stone-950">Step 3</span>
							<p className="mt-3 text-base leading-relaxed text-stone-700">Live within weeks. Quotes go out the same day, jobs come out of the group chat, paperwork gets done once, on site.</p>
						</div>
						<div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
							<span className="inline-block bg-yellow-300 px-2 py-0.5 text-xs font-bold uppercase tracking-wide text-stone-950">Step 4</span>
							<p className="mt-3 text-base leading-relaxed text-stone-700">You own the lot: code, database, reports.</p>
						</div>
					</div>
					<div className="mt-10 rounded-2xl bg-stone-950 p-8 sm:p-10">
						<p className="text-xs font-bold uppercase tracking-widest text-yellow-400">The guarantee</p>
						<p className="mt-3 text-2xl font-bold leading-snug tracking-tight text-white sm:text-3xl">
							Live in your business within 6 weeks, or I work free until it is. And you keep the code and database either way.
						</p>
					</div>
					<div className="mt-10 text-center">
						<a href="#book" className="inline-block rounded-xl bg-yellow-400 px-6 py-3.5 text-base font-bold text-stone-950 shadow-md transition hover:bg-yellow-300">Book a 20-min chat</a>
					</div>
				</section>

				{/* ============ OWNERSHIP / ANTI-SAAS ============ */}
				<section className="border-y border-stone-200 bg-white">
					<div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
						<h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">You&rsquo;d never rent your tools. Why rent your software?</h2>
						<p className="mt-4 max-w-2xl text-lg leading-relaxed text-stone-600">A 10-person crew on simPRO pays $500+ a month, forever. That&rsquo;s $30k over five years, and you own nothing at the end of it.</p>
						<div className="mt-10 grid gap-6 lg:grid-cols-2">
							<div className="rounded-2xl border border-stone-200 bg-stone-50 p-8">
								<h3 className="text-lg font-bold text-stone-500">simPRO / ServiceM8</h3>
								<ul className="mt-6 space-y-4 text-base text-stone-600">
									<li className="flex gap-3">
										<CrossIcon className="mt-0.5 h-5 w-5 flex-none text-stone-400" />
										$500+ a month for a 10-person crew, forever
									</li>
									<li className="flex gap-3">
										<CrossIcon className="mt-0.5 h-5 w-5 flex-none text-stone-400" />
										Generic workflows you bend your business around
									</li>
									<li className="flex gap-3">
										<CrossIcon className="mt-0.5 h-5 w-5 flex-none text-stone-400" />
										Their logo on your reports
									</li>
									<li className="flex gap-3">
										<CrossIcon className="mt-0.5 h-5 w-5 flex-none text-stone-400" />
										Stop paying and you lose the lot
									</li>
								</ul>
							</div>
							<div className="rounded-2xl border-2 border-stone-950 bg-white p-8 shadow-md">
								<h3 className="flex items-center gap-2.5 text-lg font-bold text-stone-950"><Image src="/assets/icon-dark.png" alt="" width={820} height={824} className="h-6 w-6" />Zeltta</h3>
								<ul className="mt-6 space-y-4 text-base text-stone-700">
									<li className="flex gap-3">
										<CheckIcon className="mt-0.5 h-5 w-5 flex-none text-stone-900" />
										One fixed price: no per-seat fees, ever
									</li>
									<li className="flex gap-3">
										<CheckIcon className="mt-0.5 h-5 w-5 flex-none text-stone-900" />
										Built around your exact workflow, not a template
									</li>
									<li className="flex gap-3">
										<CheckIcon className="mt-0.5 h-5 w-5 flex-none text-stone-900" />
										Your logo on every report
									</li>
									<li className="flex gap-3">
										<CheckIcon className="mt-0.5 h-5 w-5 flex-none text-stone-900" />
										You own the code and the database from day one
									</li>
									<li className="flex gap-3">
										<CheckIcon className="mt-0.5 h-5 w-5 flex-none text-stone-900" />
										Hosting ~$50/month on your own account, paid on your own card
									</li>
								</ul>
							</div>
						</div>
						<p className="mt-8 max-w-2xl text-lg leading-relaxed text-stone-700">
							Same five years with Zeltta: about $23k all up, and you own the software instead of a stack of receipts. An asset that counts when you sell the business.
						</p>
						<div className="mt-10">
							<a href="#book" className="inline-block rounded-xl bg-yellow-400 px-6 py-3.5 text-base font-bold text-stone-950 shadow-md transition hover:bg-yellow-300">Book a chat, get a fixed quote inside a week</a>
						</div>
					</div>
				</section>

				{/* ============ PROOF ============ */}
				<section className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
					<h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">Why trust one engineer over an agency?</h2>
					<p className="mt-4 max-w-2xl text-lg leading-relaxed text-stone-600">Brisbane agencies quote $80k and six months for this work. Most of that pays for the office and the layers between you and the engineer. Here you deal with the engineer directly.</p>
					<div className="mt-10 grid gap-6 sm:grid-cols-3">
						<div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
							<p className="text-4xl font-extrabold tracking-tight text-stone-950">100+</p>
							<p className="mt-3 text-base leading-relaxed text-stone-700">New Zealand companies run their safety, compliance and inspections on systems I built single-handed.</p>
						</div>
						<div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
							<p className="text-4xl font-extrabold tracking-tight text-stone-950">1M+ people</p>
							<p className="mt-3 text-base leading-relaxed text-stone-700">Have played one of several promotional games I&rsquo;ve built for JB Hi-Fi campaigns.</p>
						</div>
						<div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
							<p className="text-4xl font-extrabold tracking-tight text-stone-950">10 yrs</p>
							<p className="mt-3 text-base leading-relaxed text-stone-700">A decade building software end to end: design, build, deploy, support.</p>
						</div>
					</div>
					<div className="mt-10 text-center">
						<a href="#book" className="inline-block rounded-xl bg-yellow-400 px-6 py-3.5 text-base font-bold text-stone-950 shadow-md transition hover:bg-yellow-300">See a working system in 20 minutes</a>
					</div>
				</section>

				{/* ============ PRICING ============ */}
				<section className="border-y border-stone-200 bg-white">
					<div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
						<h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">Straightforward pricing, in writing</h2>
						<p className="mt-4 max-w-2xl text-lg leading-relaxed text-stone-600">The exact number depends on how many workflows we build. You&rsquo;ll have it inside a week.</p>
						<div className="mt-10 grid gap-6 lg:grid-cols-2">
							<div className="flex flex-col rounded-2xl border border-stone-200 bg-stone-50 p-8">
								<h3 className="text-lg font-bold text-stone-900">Core build</h3>
								<p className="mt-3 text-4xl font-extrabold tracking-tight text-stone-900">$12k <span className="text-base font-semibold text-stone-500">fixed</span></p>
								<ul className="mt-6 flex-1 space-y-3 text-base text-stone-700">
									<li className="flex gap-3"><span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-stone-900"></span>3–4 core workflows</li>
									<li className="flex gap-3"><span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-stone-900"></span>Your existing data migrated in</li>
									<li className="flex gap-3"><span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-stone-900"></span>Full handover docs</li>
								</ul>
							</div>
							<div className="flex flex-col rounded-2xl border-2 border-stone-950 bg-white p-8 shadow-md">
								<h3 className="text-lg font-bold text-stone-900">Full build</h3>
								<p className="mt-3 text-4xl font-extrabold tracking-tight text-stone-900">$20–25k <span className="text-base font-semibold text-stone-500">fixed</span></p>
								<ul className="mt-6 flex-1 space-y-3 text-base text-stone-700">
									<li className="flex gap-3"><span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-stone-900"></span>5–7 workflows</li>
									<li className="flex gap-3"><span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-stone-900"></span>Xero and SMS integrations</li>
									<li className="flex gap-3"><span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-stone-900"></span>Training for you and the crew</li>
								</ul>
							</div>
						</div>
						<div className="mt-6 rounded-2xl border border-stone-200 bg-stone-50 p-8">
							<p className="text-xs font-bold uppercase tracking-wide text-stone-500">After the build</p>
							<h3 className="mt-2 text-lg font-bold text-stone-900">Your system runs itself on ~$50/month hosting. That&rsquo;s the whole bill.</h3>
							<div className="mt-6 grid gap-6 sm:grid-cols-3">
								<div className="rounded-xl border border-stone-200 bg-white p-6">
									<p className="font-bold text-stone-900">Warranty <span className="ml-1 text-sm font-semibold text-stone-500">included</span></p>
									<p className="mt-2 text-base leading-relaxed text-stone-700">If something I built breaks, I fix it free. Like your work, mine&rsquo;s under warranty.</p>
								</div>
								<div className="rounded-xl border border-stone-200 bg-white p-6">
									<p className="font-bold text-stone-900">Standby <span className="ml-1 text-sm font-semibold text-stone-500">$149/month, optional</span></p>
									<p className="mt-2 text-base leading-relaxed text-stone-700">Same-day priority response, monitoring, backups, and small tweaks included. Cancel anytime.</p>
								</div>
								<div className="rounded-xl border border-stone-200 bg-white p-6">
									<p className="font-bold text-stone-900">Upgrades <span className="ml-1 text-sm font-semibold text-stone-500">fixed quote</span></p>
									<p className="mt-2 text-base leading-relaxed text-stone-700">Business changed? New workflows, reports and integrations, most $1–3k.</p>
								</div>
							</div>
						</div>
						<div className="mt-8 rounded-xl border border-stone-200 bg-stone-50 px-6 py-5 text-base leading-relaxed text-stone-700">
							<span className="font-semibold text-stone-900">Terms:</span> 25% books your build slot, 75% due when it&rsquo;s live and in use.
						</div>
						<div className="mt-10 text-center">
							<a href="#book" className="inline-block rounded-xl bg-yellow-400 px-6 py-3.5 text-base font-bold text-stone-950 shadow-md transition hover:bg-yellow-300">Book a 20-min chat</a>
						</div>
					</div>
				</section>

				{/* ============ FAQ ============ */}
				<section className="mx-auto max-w-3xl px-5 py-16 sm:py-20">
					<h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">Fair questions</h2>
					<div className="mt-10 space-y-4">
						<details className="group rounded-2xl border border-stone-200 bg-white shadow-sm">
							<summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 text-base font-semibold text-stone-900">
								What happens if you get hit by a bus?
								<ChevronIcon />
							</summary>
							<p className="px-6 pb-6 text-base leading-relaxed text-stone-600">You&rsquo;re covered better than with most agencies. The code and database live in your own cloud account from day one, so nothing is held hostage. Payments are tied to fixed milestones, so you never owe anything for undelivered work. Every build ships with handover docs, and it&rsquo;s written in standard, well-documented tech that any competent developer can pick up and run with.</p>
						</details>
						<details className="group rounded-2xl border border-stone-200 bg-white shadow-sm">
							<summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 text-base font-semibold text-stone-900">
								What if it goes over budget?
								<ChevronIcon />
							</summary>
							<p className="px-6 pb-6 text-base leading-relaxed text-stone-600">It can&rsquo;t. The quote is fixed and in writing before we start. If something takes me longer than I estimated, that&rsquo;s my problem, not yours.</p>
						</details>
						<details className="group rounded-2xl border border-stone-200 bg-white shadow-sm">
							<summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 text-base font-semibold text-stone-900">
								Who owns the code?
								<ChevronIcon />
							</summary>
							<p className="px-6 pb-6 text-base leading-relaxed text-stone-600">You do. The repository, the database, the IP, everything. It sits in your own account from the first week of the build, not mine.</p>
						</details>
						<details className="group rounded-2xl border border-stone-200 bg-white shadow-sm">
							<summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 text-base font-semibold text-stone-900">
								What does hosting cost?
								<ChevronIcon />
							</summary>
							<p className="px-6 pb-6 text-base leading-relaxed text-stone-600">Around $40–70 AUD a month, paid directly to the hosting provider on your own card. I never hold your hosting, your billing, or your data.</p>
						</details>
						<details className="group rounded-2xl border border-stone-200 bg-white shadow-sm">
							<summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 text-base font-semibold text-stone-900">
								Do I need to rip out my current tools?
								<ChevronIcon />
							</summary>
							<p className="px-6 pb-6 text-base leading-relaxed text-stone-600">No. Your system integrates with the tools that already work for you: Xero for invoicing, SMS for the crew, whatever you&rsquo;re keeping. We replace the double-handling, not the things that are working.</p>
						</details>
					</div>
					<div className="mt-10 text-center">
						<a href="#book" className="inline-block rounded-xl bg-yellow-400 px-6 py-3.5 text-base font-bold text-stone-950 shadow-md transition hover:bg-yellow-300">Still got questions? Book a 20-min chat</a>
					</div>
				</section>

				{/* ============ FOUNDER'S NOTE ============ */}
				<section className="border-y border-stone-200 bg-white">
					<div className="mx-auto max-w-3xl px-5 py-16 sm:py-20">
						<div className="flex flex-col items-start gap-6 sm:flex-row sm:gap-8">
							<Image src="/assets/team-rikus-wiehahn.png" alt="Rikus Wiehahn" width={580} height={553} className="h-24 w-24 flex-none rounded-full object-cover" />
							<div>
								<h2 className="text-2xl font-bold tracking-tight text-stone-900">A note from the person who&rsquo;ll actually build it</h2>
								<div className="mt-5 space-y-4 text-base leading-relaxed text-stone-700">
									<p>Saffa born, NZ raised, aspiring Aussie. I&rsquo;ve spent ten years building software end to end. Systems I built single-handed run daily operations for 100+ New Zealand companies, and my promotional games for JB Hi-Fi have been played by over a million people.</p>
									<p>I&rsquo;ve noticed owner-operators paying rent forever on software that almost fits. AI advances enable experienced developers to build serious software in a fraction of the time and cost. So instead of &ldquo;own nothing and be happy&rdquo;, you can now own a system that&rsquo;s a unique asset to your business.</p>
								</div>
								<p className="mt-6 font-semibold text-stone-900">
									Rikus Wiehahn
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* ============ FINAL CTA / BOOKING ============ */}
				<section id="book" className="scroll-mt-24 bg-stone-950">
					<div className="mx-auto max-w-3xl px-5 py-16 sm:py-24">
						<div className="text-center">
							<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Book a 20-min chat</h2>
							<p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-stone-300">No pitch, no obligation. Tell me how you run jobs today, and I&rsquo;ll see if I can help.</p>
							<p className="mt-4 text-sm font-medium text-stone-400">Prefer the phone? Call Rikus on <a href="tel:+61425438868" className="font-bold text-white underline decoration-yellow-400 decoration-2 underline-offset-4 transition hover:text-yellow-400">0425 438 868</a>.</p>
						</div>
						<div className="mt-10 overflow-hidden rounded-2xl bg-white">
							<iframe
								src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3PJy8MJfVFCrxboaP025XNdZOzZQKyuYYN0SuphGptF90u6ZpnF-_mIG-HlubpumRXzwAB32z5?gv=true"
								title="Book a 20-min chat"
								style={{ border: 0 }}
								width="100%"
								height={600}
							/>
						</div>
						<p className="mt-6 text-center text-sm text-stone-400">Two build slots a month.</p>
					</div>
				</section>

			</main>

			{/* ============ FOOTER ============ */}
			<footer className="border-t border-stone-800 bg-stone-950 pb-24 md:pb-0">
				<div className="mx-auto max-w-6xl px-5 py-10">
					<div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
						<div>
							<Image src="/assets/logo-text.png" alt="Zeltta" width={1459} height={703} className="h-8 w-auto" />
							<p className="mt-3 max-w-xs text-sm leading-relaxed text-stone-400">Custom job, inspection and compliance software for trade businesses in South East Queensland.</p>
						</div>
						<div className="space-y-2 text-sm text-stone-300">
							<p>Camp Hill, Brisbane QLD</p>
							<p><a href="tel:+61425438868" className="transition hover:text-yellow-400">0425 438 868</a></p>
							<p><EmailReveal /></p>
							<p className="text-stone-400">ABN 89 848 562 991</p>
						</div>
					</div>
					<p className="mt-8 border-t border-stone-800 pt-6 text-xs text-stone-500">© 2026 Zeltta. Built in Brisbane, Australia.</p>
				</div>
			</footer>

			{/* ============ STICKY MOBILE CTA ============ */}
			<div className="fixed inset-x-0 bottom-0 z-50 flex gap-2 border-t border-stone-200 bg-white/95 p-3 backdrop-blur md:hidden">
				<a href="tel:+61425438868" className="flex flex-none items-center gap-2 rounded-xl border-2 border-stone-900 px-4 py-3.5 text-base font-bold text-stone-900 transition active:bg-stone-100">
					<PhoneIcon className="h-4 w-4" />
					Call
				</a>
				<a href="#book" className="block flex-1 rounded-xl bg-yellow-400 px-5 py-3.5 text-center text-base font-bold text-stone-950 shadow-md transition active:bg-yellow-300">Book a 20-min chat</a>
			</div>
		</>
	);
};

export default Page;
