"use client";

export default function AiMlSection() {
  const aiPipelines = [
    {
      title: "Hugging Face Hub Model Weight Synchronization",
      tag: "HF_HUB // RUNTIME_SYNC",
      desc: "Serialized PyTorch model checkpoints hosted on Hugging Face Hub, pulled dynamically during Docker container initialization to keep deployment image sizes minimal and decoupled from weight artifacts.",
      metrics: "Dynamic Hub Sync · Optimized Docker Layers",
      badge: "Hugging Face Hub",
      color: "cyan",
    },
    {
      title: "RASC-Net: Residual Attention & Adversarial Defense",
      tag: "PYTORCH // FGSM_DEFENSE",
      desc: "Custom 2.88M parameter Residual Attention vision network with a multi-stage defense pipeline (bit-depth reduction, spatial smoothing) boosting FGSM attack resistance from 24% to 62.5%.",
      metrics: "+38.5% Adversarial Robustness · 2.88M Params",
      badge: "PyTorch + Vision",
      color: "spring",
    },
    {
      title: "SVAMITVA AI Drone Orthophoto Vectorization",
      tag: "GEO_SPATIAL // U-NET_SEGMENTATION",
      desc: "End-to-end aerial drone orthophoto vectorization pipeline using PyTorch U-Net for feature extraction and Shoelace algorithmic polygon area calculation for Smart India Hackathon.",
      metrics: "Sub-pixel GIS Vectorization · Fast Ingress",
      badge: "GIS + Computer Vision",
      color: "k8s",
    },
    {
      title: "FraudGuard Real-Time Multi-Channel Inference",
      tag: "FAST_INFERENCE // CLASSIFIERS",
      desc: "Sub-50ms verdict generation pipeline combining TF-IDF text vectorization and Random Forest ensemble classifiers behind an autoscaled FastAPI inference service on Kubernetes.",
      metrics: "< 50ms Inference · Prometheus Metrics",
      badge: "Real-Time ML Serving",
      color: "spring",
    },
  ];

  return (
    <section id="ai-ml" className="border-b border-border bg-bg-dark/80">
      <div className="mx-auto max-w-content px-6 py-20">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 font-mono text-xs text-cyan mb-2">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
            <span>SUBSYSTEM // AI_ML_MODEL_INFRASTRUCTURE</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Applied AI/ML &amp; Hugging Face Hub Integration
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-ink-muted leading-relaxed">
            Bridging machine learning research and backend infrastructure: deep learning architectures, adversarial robustness, and decoupled model weights distribution.
          </p>
        </div>

        {/* AI Pipelines 2x2 Bento Grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {aiPipelines.map((pipeline) => (
            <div
              key={pipeline.title}
              className="rounded-xl border border-border bg-bg-card p-6 transition-all hover:border-cyan/50 hover:bg-bg-cardHover hover:shadow-cyan-glow"
            >
              <div className="flex items-center justify-between border-b border-border-subtle pb-3 font-mono text-xs">
                <span className="text-cyan font-bold">{pipeline.tag}</span>
                <span className="rounded border border-cyan/30 bg-cyan/10 px-2 py-0.5 text-[10px] text-cyan">
                  {pipeline.badge}
                </span>
              </div>

              <h3 className="mt-4 text-lg font-bold text-ink">
                {pipeline.title}
              </h3>

              <p className="mt-2 text-xs leading-relaxed text-ink-muted">
                {pipeline.desc}
              </p>

              <div className="mt-4 rounded-md border border-border-subtle bg-bg-dark/60 px-3 py-2 font-mono text-[11px] text-ink-accent flex items-center justify-between">
                <span>METRICS:</span>
                <span className="text-spring-light font-medium">{pipeline.metrics}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
