# SRE Stack

Throughout my career as an SRE developer, I encountered different challenges. Sometimes these occur at the beginning, or also as your team and projects grow.

These are several of the technologies that I have tested, although not all of them have been put into production.

The order of implementation is not so relevant, although I always recommend starting with observability

1. [Observability](#Observability)
1.1 [Prometheus](#Prometheus)
1.2 [Exporters](#Exporters)
1.3 [Grafana](#Grafana)
1.4 [Fluentbit](#Fluentbit)
1.5 [New Relic](#New-Relic)
1.6 [Datadog](#Datadog)
1.7 [Open Telemetry](#Open-Telemetry)
1.8 [Jager](#Jager)
2. [Container Orchestration](Container-Orchestration)
2.1 [Kubernetes](Kubernetes)
3. [Incident Management](Incident-Management)
3.1 [Zenduty](#Zenduty)
3.2 [Dispatch](Dispatch)
3.3 [Oncall + Iris](Oncall-Iris) 
4. [Automations](Automations)
4.1 [Jenkins](#Jenkins)
4.2 [GitOps CI/CD](GitOps-CI/CD)
4.2.1 [Gitlab CI](#Gitlab-CI)
4.2.2 [Github Actions](#Github-Actions)  
4.2.3 [ArgoCD](#ArgoCD)
4.3 [Flow Orchestrator](Flow-Orchestrator)
4.3.1 [Prefect](Prefect)
4.3.2 [Airflow](Airflow)  
4.4 [Release Enginering](Release-Enginering)
4.4.1 [Bazel](#Bazel)
5. [IaC](IaC)
5.1 [Terraform](#Terraform)
5.2 [Ansible](#Ansible)
6. [Service Mesh](Service-mesh)
6.1 [Istio](Istio)
7. [Secrets Management](Secrets-Manegement)
7.1 [Vault Hashicorp](#Vault-Hashicorp)
8. [Artifactory](Artifactory)
8.1 [Jfrog Artifactory](Jfrog-Artifactory)

![SRE-stack](assets/sre-stack.png "SRE Stack")


## Observability
Observability is the first step I recommend taking in SRE, given that the other points depend greatly on whether you have monitoring on your system. And in terms of automation, it is very likely that by this point I already have several automations working.

The following recommendations are personal and that I have tried. As I try better solutions, I will include them in this project.

If you are working in the cloud, the solution may be simpler since the main clouds already come with their own observation tools that work very well. Some with an additional cost. Here we are going to focus on-premise.

Generally, if you work on-premise, it is common to install these solutions in a container orchestrator such as kubernetes, but here we are going to keep it simple and install it directly on a Linux server.

### Prometheus
![Prometheus](assets/prometheus.png "Prometheus")

Prometehus is a central processor of information from different sources. These sources are known as exporters or prometheus targets, since they are the ones that provide information to prometheus in a language that prometheus can read. The best known is `node_exporter`, which allows you to know the resources available and used in real time on a server, whether Linux or Windows.

This information is stored by Prometheus, as a Time Series Database (TSDB). Prometheus then has the ability to provide this data to `Alert Manager` and `Grafana` for real-time viewing.

Source: [Prometheus documentation](https://prometheus.io/docs/introduction/overview/)

#### Install exporter
First I recommend installing the explorer on each server that you need to monitor its metrics.
[Node exporter](https://github.com/prometheus/node_exporter)
These will be exposed on port 9100, for example `http://localhost:9100`

Then a central monitoring server will read those metrics, store them, and then do custom processing, create dashboards with grafana and even generate alerts according to the rules that we have indicated.

#### Install Prometheus

We will install Prometheus directly on the system, without the use of docker or kubernetes.

### Grafana
Grafana is a data visualizer generally used for real-time monitoring metrics. It can read from different data sources and the most common are the TSDB with the PromQL language.

Source: [Grafana](https://grafana.com/docs/grafana/latest/)


## Fluentbit
Fluent Bit is a very lightweight telemetry agent, it can capture logs, metrics and traces. Despite its different functionalities, I have only used it for logs.

You need to create a configuration file once installed. This file should be called `fluent-bit.conf`, you can find it in the sourcebit section.

For this example we are going to assume that we want to monitor the logs of 3 different applications and with different log generation formats. Additionally, we are going to export these logs to Prometheus.

myapp1 -> logfmt
myapp2 -> LTSV
myapp3 -> JSON

Execute
```bash
fluent-bit -c /path/to/your/fluent-bit.conf
```

Then in prometheus you need to configure a job in `prometheus.yml`

*Access the metrics*
1. Fluent Bit will export the metrics in `http://localhost:2021/metrics`.
2. Prometheus will gather the metrics according to the `prometheus.yml` configuration.

## Open Telemetry and Jaeger


