import pandas as pd
import numpy as np
import json
import os

results_file = os.path.join(os.path.dirname(__file__), "../jmeter/reports/results.jtl")
summary_file = os.path.join("reports", "summary.txt")
json_file = os.path.join("reports", "analysis.json")

if not os.path.exists(results_file):
    print("No results.jtl found in reports/. Run JMeter first.")
    exit(1)

# Load JMeter results
df = pd.read_csv(results_file)

# Basic metrics
total_samples = len(df)
avg_time = df['elapsed'].mean()
error_rate = (df['success'] == False).mean() * 100

# Summary text
summary_text = f"""
JMeter AI Summary Report
========================
Total Samples: {total_samples}
Average Response Time: {avg_time:.2f} ms
Error Rate: {error_rate:.2f} %

Performance Status: {"OK ✅" if error_rate < 5 else "Needs Attention ⚠️"}
"""

# Save text file
os.makedirs("reports", exist_ok=True)
with open(summary_file, "w") as f:
    f.write(summary_text)

# Save JSON report
analysis = {
    "total_samples": int(total_samples),
    "avg_response_time_ms": round(float(avg_time), 2),
    "error_rate_percent": round(float(error_rate), 2),
    "status": "OK" if error_rate < 5 else "Needs Attention"
}
with open(json_file, "w") as f:
    json.dump(analysis, f, indent=2)

print("✅ AI Summary generated: reports/summary.txt and reports/analysis.json")
