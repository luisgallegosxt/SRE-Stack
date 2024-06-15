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
