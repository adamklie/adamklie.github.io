---
layout: page
title: EUGENe
description: Deep learning for regulatory genomics
img: assets/img/eugene_logo.png
importance: 1
category: genomics
related_publications: true
---

**EUGENe** (End-to-end Utilitarian Genomics ENgine) is an open-source Python toolkit for building, training, and evaluating deep learning models that predict regulatory activity from DNA sequence.

Regulatory genomics has a fundamental challenge: we need to understand how DNA sequence encodes the instructions for when, where, and how genes are expressed. Deep learning has emerged as a powerful approach for learning these sequence-to-function mappings. EUGENe makes it easy to apply these methods to your own data.

## What EUGENe does

- **Sequence preprocessing** — flexible handling of genomic sequences, variant effects, and data augmentation
- **Model library** — standard architectures (DeepSEA, Basset, Enformer-style) plus modular building blocks for custom models
- **Training infrastructure** — PyTorch Lightning-based training with logging, checkpointing, and reproducibility
- **Evaluation** — performance metrics, attribution analysis, and in-silico mutagenesis
- **Interpretability** — feature attribution (saliency, DeepLIFT, ISM) to understand what sequence features drive predictions

## Links

- [GitHub](https://github.com/cartercompbio/EUGENe)
- [Documentation](https://eugene-tools.readthedocs.io/en/latest/?badge=latest)
- [Publication — Nature Computational Science (2023)](https://www.nature.com/articles/s43588-023-00544-w)
- [Preprint](https://www.biorxiv.org/content/10.1101/2022.10.24.513593)

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/eugene_logo.png" title="EUGENe logo" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
