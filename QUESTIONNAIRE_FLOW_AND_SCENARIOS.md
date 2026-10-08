# NHRD × xMonks 2026 Executive Research Questionnaire
## Dynamic Flow Architecture & Scenario Tables Documentation

---

## 1. Executive Architecture & Routing Overview

The questionnaire dynamically tailors its questions based on **two key decision forks** encountered in **Category 3 (Designation & Perspective)**:

1. **Decision Fork 1 — Designation / Strategic Vantage Point (`Q05`)**:
   - `chro`: CHRO / CPO / HR Head
   - `clo`: CLO / Talent Head
   - `ld`: Head L&D / OD / Leadership Development
   - `cxo`: Business Leader / CXO sponsor
   - `other`: Other senior people leader

2. **Decision Fork 2 — Coaching Exposure (`Q06`)**:
   - **Coaching User Route**: Respondent selects *"Structured coaching user"* or *"Selective / past / informal user"*.
   - **Non-User Route**: Respondent selects *"Prospective user considering coaching"*, *"Non-user with no active plans"*, or *"Unsure"*.

---

## 2. All 10 Scenarios: Summary Comparison Table

| Scenario ID | Designation / Role | Coaching Type | Total Questions | Required | Optional | Skipped | Core Routing Rationale |
| :--- | :--- | :--- | :---: | :---: | :---: | :---: | :--- |
| `chro_user` | **CHRO / CPO / HR Head** | **Coaching User** | **29** | 23 | 6 | 7 | Evaluates all 6 ripple tiers; Modalities (`Q07U–Q09U`) are made optional. |
| `chro_non_user` | **CHRO / CPO / HR Head** | **Non-User** | **25** | 22 | 3 | 11 | Complete org context + alternative interventions & adoption conditions. |
| `clo_user` | **CLO / Talent Head** | **Coaching User** | **26** | 22 | 4 | 10 | Modalities required; skips Business, Stakeholder, Ecosystem (`Q17U–Q19U`). |
| `clo_non_user` | **CLO / Talent Head** | **Non-User** | **25** | 21 | 4 | 11 | Non-user route; Barriers (`Q11`) is optional. |
| `ld_user` | **Head L&D / OD** | **Coaching User** | **25** | 22 | 3 | 11 | Talent/modalities focus; skips Q17U–Q19U and skips Value/ROI (`Q20U`). |
| `ld_non_user` | **Head L&D / OD** | **Non-User** | **25** | 22 | 3 | 11 | Standard non-user evaluation pathway. |
| `cxo_user` | **CXO Sponsor** | **Coaching User** | **21** | 18 | 3 | 15 | **Lean Executive Path**: skips org context (`Q10–Q13`), modalities (`Q07U–Q09U`), and metrics list (`Q21U`). Evaluates ROI & high-level ripple. |
| `cxo_non_user` | **CXO Sponsor** | **Non-User** | **21** | 18 | 3 | 15 | **Lean Executive Path**: skips org context (`Q10–Q13`), proceeds directly to strategic non-user evaluation. |
| `other_user` | **Other Senior Leader** | **Coaching User** | **29** | 26 | 3 | 7 | Full coaching survey (modalities + all 6 ripple tiers required). |
| `other_non_user` | **Other Senior Leader** | **Non-User** | **25** | 22 | 3 | 11 | Full non-user evaluation pathway. |

---

## 3. Detailed Category-Wise Walkthrough: CHRO

### Scenario 3.1: CHRO + Coaching User (`chro_user`)
*Total: 29 Questions (23 Required, 6 Optional)*

| Step | Category / Section | Question ID | Question Tag | Type | Status | Question Title |
| :---: | :--- | :--- | :--- | :--- | :---: | :--- |
| **1** | 1. Participant Profile | `Q00_NAME` | Full Name | Text | **Required** | What is your full name? |
| **2** | 1. Participant Profile | `Q00_EMAIL` | Work Email | Email | **Required** | What is your official work email address? |
| **3** | 2. Organization Profile | `Q01` | Industry | Single Select | **Required** | Which industry best describes your organization’s primary business? |
| **4** | 2. Organization Profile | `Q02` | Org size | Single Select | **Required** | Approximately how many employees does your organization have in India? |
| **5** | 2. Organization Profile | `Q03` | Ownership | Single Select | **Required** | Which ownership structure best describes your organization? |
| **6** | 2. Organization Profile | `Q04` | Region HQ | Single Select | **Required** | Where is your organization’s India head office or primary operating HQ located? |
| **7** | 3. Designation & Perspective | `Q05` | Designation & Role | Single Select | **Required** | Which role best describes you? *(Selects: CHRO)* |
| **8** | 3. Designation & Perspective | `Q06` | Coaching exposure | Single Select | **Required** | Which statement best describes your organization’s current use of coaching? *(Selects: User)* |
| **9** | 4. Organizational Coaching Context | `Q10` | Coaching stage | Single Select | **Required** | Which statement best describes your organization’s current coaching stage? |
| **10** | 4. Organizational Coaching Context | `Q11` | Barriers | Multi Select | **Required** | What are the main barriers to wider adoption or deeper embedding of coaching in your organization? |
| **11** | 4. Organizational Coaching Context | `Q12` | Integration | Likert (1–5) | **Required** | To what extent is coaching integrated into leadership, talent, or people processes in your organization? |
| **12** | 4. Organizational Coaching Context | `Q13` | Measurement | Likert (1–5) | **Required** | To what extent does your organization measure coaching using defined indicators, review mechanisms, or outcome data? |
| **13** | 5. Coaching Modalities & Reach | `Q07U` | Modalities | Multi Select | *Optional* | Which coaching modalities are currently used in your organization? |
| **14** | 5. Coaching Modalities & Reach | `Q08U` | Coverage | Multi Select | *Optional* | Which employee groups are currently covered by coaching? |
| **15** | 5. Coaching Modalities & Reach | `Q09U` | Coaching duration | Single Select | *Optional* | For approximately how long has coaching been used in your organization? |
| **16** | 6. Coaching Ripple Effect & Impact | `Q14U` | Leadership impact | Likert (1–5) | **Required** | Based on what you have observed, to what extent has coaching contributed to leadership-maturity outcomes such as self-awareness, emotional regulation, judgment, accountability, and clarity? |
| **17** | 6. Coaching Ripple Effect & Impact | `Q15U` | Team impact | Likert (1–5) | **Required** | To what extent has coaching contributed to team outcomes such as trust, psychological safety, collaboration, inclusion, learning, or resilience? |
| **18** | 6. Coaching Ripple Effect & Impact | `Q16U` | Organization impact | Likert (1–5) | **Required** | To what extent has coaching contributed to organizational outcomes such as succession readiness, leadership pipeline strength, engagement, retention, performance culture, or organizational health? |
| **19** | 6. Coaching Ripple Effect & Impact | `Q17U` | Business impact | Likert (1–5) | **Required** | To what extent has coaching contributed to business outcomes such as strategic execution, agility, innovation, decision quality, or productivity? |
| **20** | 6. Coaching Ripple Effect & Impact | `Q18U` | Stakeholder impact | Likert (1–5) | **Required** | To what extent has coaching contributed to stakeholder outcomes such as customer experience, supplier/partner relationships, cross-boundary collaboration, negotiation quality, or stakeholder trust? |
| **21** | 6. Coaching Ripple Effect & Impact | `Q19U` | Ecosystem impact | Likert (1–5) | **Required** | To what extent has coaching contributed to wider ecosystem or community outcomes such as responsible leadership, mentoring, volunteering, social responsibility, industry capability, or community participation? |
| **22** | 7. Value & ROI of Coaching | `Q20U` | Value / Investment | Likert (1–5) | **Required** | Overall, how would you describe the value created by coaching relative to the time, effort, and money invested? |
| **23** | 7. Value & ROI of Coaching | `Q21U` | Metrics | Multi Select | **Required** | Which indicators does your organization use, or most trust, when judging coaching value? Please select up to five. |
| **24** | 8. Qualitative Insights & Reflections | `Q22` | Open: Key outcome | Open Text | **Required** | In your view, what is the single most significant outcome that coaching has created or could create in your organization? |
| **25** | 8. Qualitative Insights & Reflections | `Q23` | Open: Ripple example | Open Text | **Required** | Please describe one example where coaching impact travelled beyond the individual leader or where it stopped before travelling further. |
| **26** | 8. Qualitative Insights & Reflections | `Q24` | Open: Conditions & risks | Open Text | **Required** | What conditions, enablers, or risks most influence whether coaching impact becomes sustainable in your organization? |
| **27** | 9. Follow-up & Case Study | `C1` | Follow-up interview | Single Select | *Optional* | May the Research Team contact you for a 45–60 minute follow-up executive interview? |
| **28** | 9. Follow-up & Case Study | `C2` | Case study shortlist | Single Select | *Optional* | May the Research Team contact you if your organization is shortlisted for a confidential case study? |
| **29** | 9. Follow-up & Case Study | `C3` | Attribution approval | Single Select | *Optional* | If case-study inclusion is considered later, would you require separate organizational approval before any attribution? |

---

### Scenario 3.2: CHRO + Non-User (`chro_non_user`)
*Total: 25 Questions (22 Required, 3 Optional)*

| Step | Category / Section | Question ID | Question Tag | Type | Status | Question Title |
| :---: | :--- | :--- | :--- | :--- | :---: | :--- |
| **1** | 1. Participant Profile | `Q00_NAME` | Full Name | Text | **Required** | What is your full name? |
| **2** | 1. Participant Profile | `Q00_EMAIL` | Work Email | Email | **Required** | What is your official work email address? |
| **3** | 2. Organization Profile | `Q01` | Industry | Single Select | **Required** | Which industry best describes your organization’s primary business? |
| **4** | 2. Organization Profile | `Q02` | Org size | Single Select | **Required** | Approximately how many employees does your organization have in India? |
| **5** | 2. Organization Profile | `Q03` | Ownership | Single Select | **Required** | Which ownership structure best describes your organization? |
| **6** | 2. Organization Profile | `Q04` | Region HQ | Single Select | **Required** | Where is your organization’s India head office or primary operating HQ located? |
| **7** | 3. Designation & Perspective | `Q05` | Designation & Role | Single Select | **Required** | Which role best describes you? *(Selects: CHRO)* |
| **8** | 3. Designation & Perspective | `Q06` | Coaching exposure | Single Select | **Required** | Which statement best describes your organization’s current use of coaching? *(Selects: Non-User / Prospective)* |
| **9** | 4. Organizational Coaching Context | `Q10` | Coaching stage | Single Select | **Required** | Which statement best describes your organization’s current coaching stage? |
| **10** | 4. Organizational Coaching Context | `Q11` | Barriers | Multi Select | **Required** | What are the main barriers to wider adoption or deeper embedding of coaching in your organization? |
| **11** | 4. Organizational Coaching Context | `Q12` | Integration | Likert (1–5) | **Required** | To what extent is coaching integrated into leadership, talent, or people processes in your organization? |
| **12** | 4. Organizational Coaching Context | `Q13` | Measurement | Likert (1–5) | **Required** | To what extent does your organization measure coaching using defined indicators, review mechanisms, or outcome data? |
| **13** | 5. Alternative Interventions & Potential | `Q07N` | Alternative interventions | Multi Select | **Required** | Which approaches does your organization currently use instead of, or in place of, formal coaching? |
| **14** | 5. Alternative Interventions & Potential | `Q08N` | Potential coverage | Multi Select | **Required** | If coaching were to be used in your organization, which groups would be the most likely starting point? |
| **15** | 5. Alternative Interventions & Potential | `Q09N` | Adoption horizon | Single Select | **Required** | Which statement best describes your organization’s likely coaching horizon? |
| **16** | 6. Evaluation & Conditions for Adoption | `Q14N` | Evidence needed | Multi Select | **Required** | What evidence would matter most if your organization were evaluating coaching? |
| **17** | 6. Evaluation & Conditions for Adoption | `Q15N` | Adoption conditions | Multi Select | **Required** | What conditions would most increase the likelihood of coaching adoption in your organization? |
| **18** | 6. Evaluation & Conditions for Adoption | `Q16N` | Adoption likelihood | Likert (1–5) | **Required** | How likely is your organization to consider a more formal coaching approach over the next 24 months? |
| **19** | 6. Evaluation & Conditions for Adoption | `Q17N` | Perceived value | Single Select | **Required** | If your organization were to adopt coaching, where do you believe it would be most likely to add value first? |
| **20** | 8. Qualitative Insights & Reflections | `Q22` | Open: Key outcome | Open Text | **Required** | In your view, what is the single most significant outcome that coaching has created or could create in your organization? |
| **21** | 8. Qualitative Insights & Reflections | `Q23` | Open: Ripple example | Open Text | **Required** | Please describe one example where coaching impact travelled beyond the individual leader or where it stopped before travelling further. |
| **22** | 8. Qualitative Insights & Reflections | `Q24` | Open: Conditions & risks | Open Text | **Required** | What conditions, enablers, or risks most influence whether coaching impact becomes sustainable in your organization? |
| **23** | 9. Follow-up & Case Study | `C1` | Follow-up interview | Single Select | *Optional* | May the Research Team contact you for a 45–60 minute follow-up executive interview? |
| **24** | 9. Follow-up & Case Study | `C2` | Case study shortlist | Single Select | *Optional* | May the Research Team contact you if your organization is shortlisted for a confidential case study? |
| **25** | 9. Follow-up & Case Study | `C3` | Attribution approval | Single Select | *Optional* | If case-study inclusion is considered later, would you require separate organizational approval before any attribution? |

---

## 4. Master Matrix: All 36 Questions Across All 10 Scenarios

Legend:
- **Req**: Question is active and mandatory to proceed.
- **Opt**: Question is active but respondent can skip without selecting an answer.
- **Skip**: Question is omitted completely for this role/route.

| Cat # | Category Name | QID | Tag | Route | CHRO User | CHRO Non | CLO User | CLO Non | L&D User | L&D Non | CXO User | CXO Non | Other User | Other Non |
| :---: | :--- | :--- | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **1** | Participant Profile | `Q00_NAME` | Full Name | all | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** |
| **1** | Participant Profile | `Q00_EMAIL` | Work Email | all | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** |
| **2** | Org Profile | `Q01` | Industry | all | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** |
| **2** | Org Profile | `Q02` | Org size | all | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** |
| **2** | Org Profile | `Q03` | Ownership | all | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** |
| **2** | Org Profile | `Q04` | Region HQ | all | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** |
| **3** | Designation | `Q05` | Role | all | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** |
| **3** | Designation | `Q06` | Exposure | all | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** |
| **4** | Org Context | `Q10` | Stage | all | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | *Skip* | *Skip* | **Req** | **Req** |
| **4** | Org Context | `Q11` | Barriers | all | **Req** | **Req** | *Opt* | *Opt* | **Req** | **Req** | *Skip* | *Skip* | **Req** | **Req** |
| **4** | Org Context | `Q12` | Integration | all | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | *Skip* | *Skip* | **Req** | **Req** |
| **4** | Org Context | `Q13` | Measurement | all | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | *Skip* | *Skip* | **Req** | **Req** |
| **5U** | Modalities & Reach | `Q07U` | Modalities | user_only | *Opt* | *Skip* | **Req** | *Skip* | **Req** | *Skip* | *Skip* | *Skip* | **Req** | *Skip* |
| **5U** | Modalities & Reach | `Q08U` | Coverage | user_only | *Opt* | *Skip* | **Req** | *Skip* | **Req** | *Skip* | *Skip* | *Skip* | **Req** | *Skip* |
| **5U** | Modalities & Reach | `Q09U` | Years Used | user_only | *Opt* | *Skip* | **Req** | *Skip* | **Req** | *Skip* | *Skip* | *Skip* | **Req** | *Skip* |
| **6U** | Ripple Impact | `Q14U` | Leadership | user_only | **Req** | *Skip* | **Req** | *Skip* | **Req** | *Skip* | **Req** | *Skip* | **Req** | *Skip* |
| **6U** | Ripple Impact | `Q15U` | Team | user_only | **Req** | *Skip* | **Req** | *Skip* | **Req** | *Skip* | **Req** | *Skip* | **Req** | *Skip* |
| **6U** | Ripple Impact | `Q16U` | Org Health | user_only | **Req** | *Skip* | **Req** | *Skip* | **Req** | *Skip* | **Req** | *Skip* | **Req** | *Skip* |
| **6U** | Ripple Impact | `Q17U` | Business | user_only | **Req** | *Skip* | *Skip* | *Skip* | *Skip* | *Skip* | **Req** | *Skip* | **Req** | *Skip* |
| **6U** | Ripple Impact | `Q18U` | Stakeholder | user_only | **Req** | *Skip* | *Skip* | *Skip* | *Skip* | *Skip* | **Req** | *Skip* | **Req** | *Skip* |
| **6U** | Ripple Impact | `Q19U` | Ecosystem | user_only | **Req** | *Skip* | *Skip* | *Skip* | *Skip* | *Skip* | **Req** | *Skip* | **Req** | *Skip* |
| **7U** | Value & ROI | `Q20U` | Value/Cost | user_only | **Req** | *Skip* | **Req** | *Skip* | *Skip* | *Skip* | **Req** | *Skip* | **Req** | *Skip* |
| **7U** | Value & ROI | `Q21U` | Metrics | user_only | **Req** | *Skip* | **Req** | *Skip* | **Req** | *Skip* | *Skip* | *Skip* | **Req** | *Skip* |
| **5N** | Alt Interventions | `Q07N` | Alternatives | non_user | *Skip* | **Req** | *Skip* | **Req** | *Skip* | **Req** | *Skip* | **Req** | *Skip* | **Req** |
| **5N** | Alt Interventions | `Q08N` | Coverage | non_user | *Skip* | **Req** | *Skip* | **Req** | *Skip* | **Req** | *Skip* | **Req** | *Skip* | **Req** |
| **5N** | Alt Interventions | `Q09N` | Horizon | non_user | *Skip* | **Req** | *Skip* | **Req** | *Skip* | **Req** | *Skip* | **Req** | *Skip* | **Req** |
| **6N** | Evaluation Conditions | `Q14N` | Evidence | non_user | *Skip* | **Req** | *Skip* | **Req** | *Skip* | **Req** | *Skip* | **Req** | *Skip* | **Req** |
| **6N** | Evaluation Conditions | `Q15N` | Conditions | non_user | *Skip* | **Req** | *Skip* | **Req** | *Skip* | **Req** | *Skip* | **Req** | *Skip* | **Req** |
| **6N** | Evaluation Conditions | `Q16N` | Likelihood | non_user | *Skip* | **Req** | *Skip* | **Req** | *Skip* | **Req** | *Skip* | **Req** | *Skip* | **Req** |
| **6N** | Evaluation Conditions | `Q17N` | Value First | non_user | *Skip* | **Req** | *Skip* | **Req** | *Skip* | **Req** | *Skip* | **Req** | *Skip* | **Req** |
| **8** | Qualitative | `Q22` | Key Outcome | all | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** |
| **8** | Qualitative | `Q23` | Ripple Story | all | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** |
| **8** | Qualitative | `Q24` | Risks/Enablers | all | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** |
| **9** | Follow-up | `C1` | Interview | all | *Opt* | *Opt* | *Opt* | *Opt* | *Opt* | *Opt* | *Opt* | *Opt* | *Opt* | *Opt* |
| **9** | Follow-up | `C2` | Case Study | all | *Opt* | *Opt* | *Opt* | *Opt* | *Opt* | *Opt* | *Opt* | *Opt* | *Opt* | *Opt* |
| **9** | Follow-up | `C3` | Approval | all | *Opt* | *Opt* | *Opt* | *Opt* | *Opt* | *Opt* | *Opt* | *Opt* | *Opt* | *Opt* |
| | **Totals** | | | | **29** | **25** | **26** | **25** | **25** | **25** | **21** | **21** | **29** | **25** |

---

## 5. CSV Files Reference

The following CSV files have been created in the project repository and are ready for import into Excel, Google Sheets, or data pipelines:

1. **Category & Question Master Matrix**:
   - File: [`questionnaire_scenarios_matrix.csv`](file:///Users/xmonks/xmonks%20websites%20&%20projects/formtype/questionnaire_scenarios_matrix.csv)
   - Public URL: [`public/questionnaire_scenarios_matrix.csv`](file:///Users/xmonks/xmonks%20websites%20&%20projects/formtype/public/questionnaire_scenarios_matrix.csv)
   - Layout: Questions mapped in rows grouped by category, with scenario columns showing status (`Required`, `Optional`, `Skipped`).

2. **Step-by-Step Flow For Every Scenario**:
   - File: [`questionnaire_all_scenarios_flow.csv`](file:///Users/xmonks/xmonks%20websites%20&%20projects/formtype/questionnaire_all_scenarios_flow.csv)
   - Public URL: [`public/questionnaire_all_scenarios_flow.csv`](file:///Users/xmonks/xmonks%20websites%20&%20projects/formtype/public/questionnaire_all_scenarios_flow.csv)
   - Layout: Chronological step order (Step 1 to N) for each scenario with Category, Question ID, Tag, Type, Requirement status, and Title.
