"use client";

import { useState } from "react";

const skills = [
	{ name: "Python", category: "Language" },
	{ name: "SQL", category: "Language" },
	{ name: "PySpark", category: "Framework" },
	{ name: "AWS", category: "Cloud" },
	{ name: "Databricks", category: "Platform" },
	{ name: "Delta Lake", category: "Platform" },
	{ name: "Unity Catalog", category: "Governance" },
	{ name: "Airflow", category: "Orchestration" },
	{ name: "LangChain", category: "AI" },
	{ name: "RAG / LLMs", category: "AI" },
];

const experience = [
	{
		role: "Data Engineer",
		company: "Windifferent (BairesDev)",
		period: "2022 — Present",
		bullets: [
			"Large-scale ETL pipelines with PySpark on Databricks.",
			"Orchestrate workflows with Airflow across a medallion architecture.",
			"AWS services: S3, EventBridge.",
			"Delta Lake & Unity Catalog for governance and data quality.",
			"Reduced storage costs ~50% through Spark optimisation.",
		],
	},
	{
		role: "Software Development Engineer",
		company: "Sinerware SAS",
		period: "2020 — 2022",
		bullets: [
			"Maintained and optimised Oracle databases and objects.",
			"Reduced page load times by 95% via targeted improvements.",
			"Full project lifecycle — from design to delivery.",
			"Oracle PL/SQL, Oracle APEX, Python, REST APIs.",
		],
	},
];

const education = [
	{
		degree: "MSc Artificial Intelligence",
		school: "Johannes Kepler University, Austria",
		period: "2022 — 2025",
		note: "Graduated with honors",
	},
	{
		degree: "BSc Electronic Engineering",
		school: "Universidad del Valle, Colombia",
		period: "2015 — 2020",
		note: "Thesis with honorable mention",
	},
];

const TABS = ["Skills", "Experience", "Education"] as const;
type Tab = (typeof TABS)[number];

export function ProfileTabs() {
	const [active, setActive] = useState<Tab>("Skills");

	return (
		<div className="rounded-2xl border border-border bg-surface shadow-sm overflow-hidden">
			{/* Tab bar */}
			<div className="flex border-b border-border bg-surface-strong/50">
				{TABS.map((tab) => (
					<button
						key={tab}
						onClick={() => setActive(tab)}
						className={`flex-1 py-3.5 text-sm font-medium tracking-wide transition-all relative ${
							active === tab
								? "text-primary"
								: "text-muted hover:text-foreground"
						}`}
					>
						{tab}
						{active === tab && (
							<span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-10 rounded-full bg-primary" />
						)}
					</button>
				))}
			</div>

			{/* Panel */}
			<div className="p-6">
				{/* Skills */}
				{active === "Skills" && (
					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
						{skills.map((s) => (
							<div
								key={s.name}
								className="flex flex-col items-center gap-1 rounded-xl border border-border bg-surface-strong/40 px-3 py-3 text-center transition-all hover:shadow-sm hover:-translate-y-0.5"
							>
								<span className="text-sm font-semibold text-primary">
									{s.name}
								</span>
								<span className="text-[11px] text-muted uppercase tracking-wider">
									{s.category}
								</span>
							</div>
						))}
					</div>
				)}

				{/* Experience */}
				{active === "Experience" && (
					<div className="flex flex-col gap-6">
						{experience.map((exp) => (
							<div
								key={exp.company}
								className="rounded-xl border border-border bg-surface-strong/30 p-4"
							>
								<div className="flex items-baseline justify-between gap-4 mb-2">
									<p className="text-sm font-semibold text-primary">
										{exp.role}{" "}
										<span className="font-normal text-muted">
											{" "}
											— {exp.company}
										</span>
									</p>
									<p className="text-xs text-muted shrink-0 bg-surface-strong rounded-full px-2.5 py-0.5">
										{exp.period}
									</p>
								</div>
								<ul className="flex flex-col gap-1.5">
									{exp.bullets.map((b) => (
										<li key={b} className="flex items-start gap-2 text-sm text-foreground/70">
											<span className="text-secondary shrink-0 mt-1 text-[10px]">
												●
											</span>
											<span>{b}</span>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				)}

				{/* Education */}
				{active === "Education" && (
					<div className="flex flex-col gap-4">
						{education.map((ed) => (
							<div
								key={ed.degree}
								className="flex items-start justify-between gap-4 rounded-xl border border-border bg-surface-strong/30 p-4"
							>
								<div>
									<p className="text-sm font-semibold text-primary">
										{ed.degree}
									</p>
									<p className="text-sm text-muted mt-0.5">
										{ed.school}
									</p>
									<p className="text-xs text-secondary mt-1 font-medium">
										{ed.note}
									</p>
								</div>
								<p className="text-xs text-muted shrink-0 bg-surface-strong rounded-full px-2.5 py-0.5 mt-0.5">
									{ed.period}
								</p>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
}
