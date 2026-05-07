import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { getProject } from "@/app/data/projects";

import endToEnd from "@/images/snowflake_project/end-to-end.png";
import ingestion from "@/images/snowflake_project/ingestion.png";
import gcpReader from "@/images/snowflake_project/gcp.png";
import rawTransaction from "@/images/snowflake_project/raw_transaction.png";
import stgTransaction from "@/images/snowflake_project/stg_transaction.png";
import dbtModel from "@/images/snowflake_project/dbtmodel.png";
import fctBalance from "@/images/snowflake_project/fct_balance_move.png";
import aggBalances from "@/images/snowflake_project/agg_balances.png";
import dag from "@/images/snowflake_project/dag.png";
import airflowUi from "@/images/snowflake_project/airflowui.png";
import snowflake from "@/images/snowflake_project/snowflake.png";
import terraform from "@/images/snowflake_project/terraform.png";

export default function PaySimFraud() {
  const project = getProject("paysim-fraud");
  const github = project.github;

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-[1060px] px-6 py-8 md:px-16">
        <SiteHeader active="/projects" />

        {/* Hero image */}
        <div className="relative mb-12 aspect-video w-full overflow-hidden rounded-2xl bg-surface-strong">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 1060px"
            quality={90}
            className="object-contain"
            priority
          />
        </div>

        {/* Title block */}
        <div className="mb-16">
          <div className="flex items-start justify-between gap-4 mb-4">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-secondary/70 uppercase">{project.kicker}</p>
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 shrink-0 rounded-full border border-border bg-surface px-5 py-2 text-[13px] font-medium text-muted transition-all hover:text-primary hover:border-primary/20 hover:-translate-y-0.5"
              >
                <svg viewBox="0 0 16 16" className="size-4 fill-current" aria-hidden="true">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.65 7.65 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
                GitHub
              </a>
            )}
          </div>
          <h1 className="text-[2rem] font-bold leading-snug tracking-[-0.02em] text-primary md:text-[2.5rem]">{project.title}</h1>
          <p className="mt-5 text-[16px] leading-[1.8] text-justify text-foreground/55">{project.longSummary}</p>
          <div className="mt-8 flex flex-wrap gap-8 border-t border-border pt-6 text-[13px] text-muted">
            <div>
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-secondary/60">Role</p>
              <p className="text-foreground/65">{project.role}</p>
            </div>
            <div>
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-secondary/60">Period</p>
              <p className="text-foreground/65">{project.period}</p>
            </div>
            <div className="flex flex-wrap gap-2 items-start">
              {project.stack.map((tag) => (
                <span key={tag} className="rounded-full bg-primary/6 px-3 py-1 text-[11px] font-medium text-primary/70">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Architecture */}
        <section className="mb-16">
          <p className="mb-3 text-[11px] font-semibold tracking-[0.2em] text-secondary/70 uppercase">Architecture</p>
          <p className="mb-6 text-[14px] leading-[1.8] text-justify text-foreground/55">
            The platform follows a <strong className="text-foreground/75">medallion architecture</strong> with four distinct layers each with
            single-responsibility boundaries. Each layer is independently testable, replayable, and observable.
          </p>
          <div className="rounded-2xl overflow-hidden border border-border bg-surface">
            <Image src={endToEnd} alt="End-to-end architecture diagram" className="w-full h-auto" quality={90} />
          </div>
          <p className="mt-3 text-[12px] text-muted/50 text-center">End-to-end pipeline overview</p>

          {/* Medallion layers as numbered steps */}
          <div className="mt-8 flex flex-col gap-2.5">
            {[
              { label: "Landing", desc: "Batch CSV files upload to GCS landing/incoming/paysim/ before any processing begins." },
              { label: "Raw", desc: "PySpark reads from GCS, enforces schema, appends rows to FRAUD_DB.RAW.raw_transactions in Snowflake, moves files to processed/." },
              { label: "Staging", desc: "dbt incremental merge renames columns, casts types, generates surrogate keys, computes balance deltas, and deduplicates." },
              { label: "Trusted", desc: "dbt materialises a star schema — dimensions (accounts, dates, transaction types) and fact/aggregate tables — plus SCD Type 2 snapshots." },
            ].map((step, i) => (
              <div key={step.label} className="flex items-start gap-4 rounded-xl border border-border bg-surface px-6 py-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/8 text-[11px] font-bold text-primary/70 mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <span className="text-[13px] font-semibold text-foreground/80">{step.label} — </span>
                  <span className="text-[13px] text-foreground/55">{step.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What I built */}
        <section className="mb-16">
          <p className="mb-6 text-[11px] font-semibold tracking-[0.2em] text-secondary/70 uppercase">What I built</p>
          <ul className="flex flex-col gap-3">
            {project.highlights.map((item) => (
              <li key={item} className="flex gap-3.5 rounded-xl border border-border bg-surface px-6 py-4 text-[14px] leading-relaxed text-foreground/60">
                <span className="mt-0.5 shrink-0 text-secondary/50">◆</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Ingestion layer */}
        <section className="mb-16">
          <p className="mb-3 text-[11px] font-semibold tracking-[0.2em] text-secondary/70 uppercase">Ingestion Layer</p>
          <p className="mb-6 text-[14px] leading-[1.8] text-justify text-foreground/55">
            Files accumulate in <code className="text-[12px] bg-surface border border-border rounded px-1.5 py-0.5">landing/incoming/</code> and are processed in ordered batches. Bad records are quarantined to{" "}
            <code className="text-[12px] bg-surface border border-border rounded px-1.5 py-0.5">landing/error/</code> automatically via Spark&apos;s{" "}
            <code className="text-[12px] bg-surface border border-border rounded px-1.5 py-0.5">badRecordsPath</code> option, enabling replay and auditing.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden border border-border bg-surface">
              <Image src={ingestion} alt="Ingestion layer overview" className="w-full h-auto" quality={90} />
              <p className="text-[12px] text-muted/50 text-center py-3">Landing zone to raw ingestion flow</p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-border bg-surface">
              <Image src={gcpReader} alt="GCP data reader PySpark job" className="w-full h-auto" quality={90} />
              <p className="text-[12px] text-muted/50 text-center py-3">GCPDataReader — GCS to Snowflake via Spark</p>
            </div>
          </div>
          <div className="mt-4 rounded-2xl overflow-hidden border border-border bg-surface">
            <Image src={rawTransaction} alt="Raw transactions table in Snowflake" className="w-full h-auto" quality={90} />
            <p className="text-[12px] text-muted/50 text-center py-3">RAW.raw_transactions schema with ingestion metadata columns</p>
          </div>
        </section>

        {/* dbt Transformation */}
        <section className="mb-16">
          <p className="mb-3 text-[11px] font-semibold tracking-[0.2em] text-secondary/70 uppercase">dbt Transformation</p>
          <p className="mb-6 text-[14px] leading-[1.8] text-justify text-foreground/55">
            The transformation layer is fully managed by dbt Core. An incremental staging model deduplicates and types the raw data before the
            trusted layer materialises a star schema optimised for fraud analytics.
          </p>

          <div className="rounded-2xl overflow-hidden border border-border bg-surface mb-4">
            <Image src={stgTransaction} alt="Staging transactions dbt model" className="w-full h-auto" quality={90} />
            <p className="text-[12px] text-muted/50 text-center py-3">stg_transactions — incremental merge with watermark logic</p>
          </div>

          <div className="rounded-2xl overflow-hidden border border-border bg-surface mb-4">
            <Image src={dbtModel} alt="dbt model lineage graph" className="w-full h-auto" quality={90} />
            <p className="text-[12px] text-muted/50 text-center py-3">Full dbt model lineage — staging → dimensions → facts → snapshots</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden border border-border bg-surface">
              <Image src={fctBalance} alt="fct_balance_movements fact table" className="w-full h-auto" quality={90} />
              <p className="text-[12px] text-muted/50 text-center py-3">fct_balance_movements — full transaction history</p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-border bg-surface">
              <Image src={aggBalances} alt="agg_account_balances aggregate table" className="w-full h-auto" quality={90} />
              <p className="text-[12px] text-muted/50 text-center py-3">agg_account_balances — fraud exposure per account</p>
            </div>
          </div>

          {/* Data quality */}
          <div className="mt-8">
            <p className="mb-4 text-[12px] font-semibold tracking-[0.15em] text-secondary/60 uppercase">Data Quality Gates</p>
            <div className="rounded-xl border border-border bg-surface overflow-hidden">
              <table className="w-full text-[13px]">
                <thead>
                  <tr className="border-b border-border">
                    <th className="px-5 py-3 text-left text-[10px] font-semibold uppercase tracking-[0.15em] text-muted/60">Test</th>
                    <th className="px-5 py-3 text-left text-[10px] font-semibold uppercase tracking-[0.15em] text-muted/60">Model</th>
                    <th className="px-5 py-3 text-left text-[10px] font-semibold uppercase tracking-[0.15em] text-muted/60">Column</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    { test: "unique + not_null", model: "stg_transactions", col: "transaction_id" },
                    { test: "not_null", model: "stg_transactions", col: "account_origin, transaction_amount, is_fraud" },
                    { test: "accepted_values", model: "stg_transactions", col: "transaction_type" },
                    { test: "assert_no_negative_amounts", model: "stg_transactions", col: "transaction_amount, orig/dest balance" },
                    { test: "relationships (FK)", model: "fct_fraud_events", col: "→ dim_accounts, dim_dates, dim_transaction_types" },
                  ].map((r) => (
                    <tr key={r.test + r.col} className="hover:bg-primary/2 transition-colors">
                      <td className="px-5 py-3 text-foreground/70 font-medium">{r.test}</td>
                      <td className="px-5 py-3 text-foreground/50 font-mono text-[12px]">{r.model}</td>
                      <td className="px-5 py-3 text-foreground/50 font-mono text-[12px]">{r.col}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Orchestration */}
        <section className="mb-16">
          <p className="mb-3 text-[11px] font-semibold tracking-[0.2em] text-secondary/70 uppercase">Orchestration</p>
          <p className="mb-6 text-[14px] leading-[1.8] text-justify text-foreground/55">
            The <code className="text-[12px] bg-surface border border-border rounded px-1.5 py-0.5">paysim_batch_ingestion</code> Airflow DAG
            coordinates the full pipeline end-to-end. Batch state is tracked via an Airflow Variable, making progress visible in the UI and
            overridable for manual backfills.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden border border-border bg-surface">
              <Image src={dag} alt="Airflow DAG graph view" className="w-full h-auto" quality={90} />
              <p className="text-[12px] text-muted/50 text-center py-3">paysim_batch_ingestion DAG graph</p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-border bg-surface">
              <Image src={airflowUi} alt="Airflow UI run history" className="w-full h-auto" quality={90} />
              <p className="text-[12px] text-muted/50 text-center py-3">Airflow UI — run history and state tracking</p>
            </div>
          </div>
        </section>

        {/* Infrastructure */}
        <section className="mb-16">
          <p className="mb-3 text-[11px] font-semibold tracking-[0.2em] text-secondary/70 uppercase">Infrastructure</p>
          <p className="mb-6 text-[14px] leading-[1.8] text-justify text-foreground/55">
            All cloud resources are managed as code. Terraform provisions the GCS bucket with lifecycle rules, GCP service accounts with
            least-privilege IAM bindings, and Snowflake warehouse and database objects.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden border border-border bg-surface">
              <Image src={snowflake} alt="Snowflake schema setup" className="w-full h-auto" quality={90} />
              <p className="text-[12px] text-muted/50 text-center py-3">Snowflake — FRAUD_DB schema structure</p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-border bg-surface">
              <Image src={terraform} alt="Terraform IaC setup" className="w-full h-auto" quality={90} />
              <p className="text-[12px] text-muted/50 text-center py-3">Terraform — GCS bucket & IAM provisioning</p>
            </div>
          </div>
        </section>

        {/* Tech stack table */}
        <section className="mb-16">
          <p className="mb-4 text-[11px] font-semibold tracking-[0.2em] text-secondary/70 uppercase">Tech Stack</p>
          <div className="rounded-xl border border-border bg-surface overflow-hidden">
            <table className="w-full text-[13px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-5 py-3 text-left text-[10px] font-semibold uppercase tracking-[0.15em] text-muted/60">Layer</th>
                  <th className="px-5 py-3 text-left text-[10px] font-semibold uppercase tracking-[0.15em] text-muted/60">Technology</th>
                  <th className="px-5 py-3 text-left text-[10px] font-semibold uppercase tracking-[0.15em] text-muted/60">Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  { layer: "Source Data", tech: "PaySim CSV (6.3M rows, 31 batches)", purpose: "Synthetic fraud transaction dataset" },
                  { layer: "Cloud Storage", tech: "Google Cloud Storage (GCS)", purpose: "Landing zone for raw batch files" },
                  { layer: "Ingestion", tech: "PySpark + Snowflake Spark Connector", purpose: "Distributed read from GCS, append to Snowflake" },
                  { layer: "Data Warehouse", tech: "Snowflake", purpose: "Multi-schema analytical warehouse" },
                  { layer: "Transformation", tech: "dbt Core", purpose: "SQL transformations, tests, documentation" },
                  { layer: "Orchestration", tech: "Apache Airflow (Astronomer Runtime)", purpose: "DAG scheduling, state tracking, retries" },
                  { layer: "Infrastructure", tech: "Terraform", purpose: "IaC for GCS buckets & service accounts" },
                  { layer: "Language", tech: "Python 3.11", purpose: "Ingestion jobs, Airflow operators" },
                  { layer: "Code Quality", tech: "Ruff", purpose: "Linting & formatting" },
                ].map((r) => (
                  <tr key={r.layer} className="hover:bg-primary/2 transition-colors">
                    <td className="px-5 py-3 text-foreground/70 font-medium">{r.layer}</td>
                    <td className="px-5 py-3 text-foreground/55">{r.tech}</td>
                    <td className="px-5 py-3 text-foreground/45">{r.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Design decisions */}
        <section className="mb-16">
          <p className="mb-6 text-[11px] font-semibold tracking-[0.2em] text-secondary/70 uppercase">Design Decisions</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { title: "PySpark over Pandas", body: "6.3M rows demand distributed processing. Spark mirrors production ingestion patterns at scale and enables parallel batch reads from GCS." },
              { title: "GCS as landing zone", body: "Decouples file arrival from processing. Files accumulate in incoming/ and are processed in ordered batches, enabling replay and auditing." },
              { title: "Incremental dbt models", body: "Watermark logic (max timestamp − 5 min) avoids full table scans and prevents gaps during concurrent loads." },
              { title: "Surrogate keys via dbt_utils", body: "Natural PaySim keys are not globally unique. Surrogate keys built from composite business attributes ensure idempotent merges." },
              { title: "SCD Type 2 snapshots", body: "Captures account dimension changes over time — essential for accurate point-in-time fraud analysis." },
              { title: "dbt test as quality gate", body: "dbt_test_staging runs between staging and trusted tasks. Bad data never reaches downstream models." },
            ].map((d) => (
              <div key={d.title} className="rounded-xl border border-border bg-surface px-6 py-5">
                <p className="text-[13px] font-semibold text-foreground/80 mb-1.5">{d.title}</p>
                <p className="text-[13px] leading-[1.7] text-foreground/50">{d.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Outcome */}
        <section className="mb-16 rounded-2xl border border-border bg-surface px-8 py-6">
          <p className="mb-3 text-[11px] font-semibold tracking-[0.2em] text-secondary/70 uppercase">Outcome</p>
          <p className="text-[14px] leading-[1.8] text-justify text-foreground/60">{project.outcome}</p>
        </section>

        <div className="flex items-center border-t border-border pt-10 pb-12">
          <Link href="/projects" className="text-[13px] text-muted/60 hover:text-primary transition-colors font-medium">← All projects</Link>
        </div>

        <section className="border-t border-border pt-20 pb-24">
          <p className="text-[11px] font-semibold tracking-[0.2em] text-secondary/70 uppercase mb-8">Get in touch</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="mailto:selene.andradelopez@gmail.com" className="inline-flex items-center gap-3 rounded-xl border border-border bg-surface px-6 py-3.5 text-[13px] text-foreground/60 transition-all hover:text-primary hover:border-primary/20 hover:-translate-y-0.5">
              selene.andradelopez@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/selene-andrade-a23367163/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-xl border border-border bg-surface px-6 py-3.5 text-[13px] text-foreground/60 transition-all hover:text-primary hover:border-primary/20 hover:-translate-y-0.5">
              LinkedIn
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

