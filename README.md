# JMeter + AI POC

This project is a **Proof of Concept (POC)** that combines **Apache JMeter** for performance/load testing with **AI-powered analysis** to automatically summarize test results.

---

## 🚀 Project Structure

poc-jmeter-ai/
mock-apis/ # Mock Node.js API server
server.js
jmeter/ # JMeter test plan and reports
test-plan.jmx
reports/
results.jtl # Generated after running tests
ai/ # AI analysis module
summary.py
requirements.txt
venv/

---

## 🛠️ How It Works

1. **Start Mock APIs**
   cd mock-apis
   npm install
   node server.js
Server runs at http://localhost:4000.

2. **Run JMeter Test Plan**
How to run JMeter and generate both .jtl and HTML report:
# Run JMeter in non-GUI mode, save results
jmeter -n -t jmeter/test-plan.jmx -l jmeter/reports/results.jtl

# Generate HTML dashboard report
jmeter -g jmeter/reports/results.jtl -o jmeter/reports/html-report
-n → non-GUI
-t → test plan file
-l → JTL results file
-g → generate report from existing JTL
-o → output folder for HTML report
After this, you can open the dashboard:
jmeter/reports/html-report/index.html

This HTML shows charts, response times, failures, etc.

4. **Analyze Results with AI**
cd ai
source venv/bin/activate   # if not already active
pip install -r requirements.txt
python summary.py
This generates:
reports/summary.txt → human-readable summary
reports/analysis.json → structured analysis

---

📊 Example Workflow
Start the mock API server.
Simulate 10 users hitting /posts, /users, /unstable using JMeter.
JMeter saves raw results into results.jtl.
AI module processes them and outputs:
Success vs failure rate
Average response times
Bottleneck insights

---

🔮 Future Enhancements
Add NLP/LLM models for more advanced natural language summaries.
Integrate directly with CI/CD pipelines (Jenkins, GitHub Actions).
Support dashboards (e.g., Streamlit, Grafana) for visualization.

---

✅ Why This POC Matters
Traditional JMeter tests give you raw logs.
This POC augments JMeter with AI so you get actionable insights immediately, without digging into XML/CSV reports.
