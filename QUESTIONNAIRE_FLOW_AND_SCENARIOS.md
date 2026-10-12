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

### Key Methodological Enhancements

1. **Branching Drift Eradication**: Non-users bypass Category 4 (`Q10`–`Q13` coaching maturity) and go directly to Category 4N & 5N (`Q07N`–`Q17N`). They are never asked how effective or integrated coaching is in their organization.
2. **Qualitative First for Users**: For active coaching users, qualitative reflections (`Q22`–`Q24`) now appear immediately following modalities (`Q07U`–`Q09U`) and *before* the Likert scales (`Q14U`–`Q19U`), anchoring ratings in authentic executive stories.
3. **Business Sponsorship & Governance (`Q_SPONSOR`)**: A dedicated tripartite governance item evaluating whether and who from business leadership reviews coaching impact alongside HR/L&D.
4. **Non-User Strategic Engagement**: Replaced intrusive 45-minute follow-ups with an optional single open reflection (`Q22N`) and an exclusive NHRD Executive Peer Roundtable invitation (`C1N`).
5. **Multi-Role Holder Organization Design**: Multiple leaders (CHRO, CLO, CXO) from the same enterprise are encouraged to respond to enable intra-organizational divergence benchmarking.

---

## 2. All 10 Scenarios: Summary Comparison Table

| Scenario ID | Designation / Role | Coaching Type | Total Questions | Required | Optional | Skipped | Core Routing Rationale |
| :--- | :--- | :--- | :---: | :---: | :---: | :---: | :--- |
| `chro_user` | **CHRO / CPO / HR Head** | **Coaching User** | **30** | 24 | 6 | 8 | All 6 ripple tiers; Modalities (`Q07U–Q09U`) optional; Sponsor & Qual first. |
| `chro_non_user` | **CHRO / CPO / HR Head** | **Non-User** | **17** | 15 | 2 | 21 | Lean non-user path; alternative interventions + adoption hurdles + roundtable opt-in. |
| `clo_user` | **CLO / Talent Head** | **Coaching User** | **27** | 23 | 4 | 11 | Modalities required; skips Business, Stakeholder, Ecosystem (`Q17U–Q19U`). |
| `clo_non_user` | **CLO / Talent Head** | **Non-User** | **17** | 15 | 2 | 21 | Lean non-user evaluation pathway. |
| `ld_user` | **Head L&D / OD** | **Coaching User** | **26** | 23 | 3 | 12 | Talent/modalities focus; skips Q17U–Q19U and skips Value/ROI (`Q20U`). |
| `ld_non_user` | **Head L&D / OD** | **Non-User** | **17** | 15 | 2 | 21 | Lean non-user evaluation pathway. |
| `cxo_user` | **CXO Sponsor** | **Coaching User** | **22** | 19 | 3 | 16 | **Lean Executive Path**: evaluates Sponsor (`Q_SPONSOR`), Qual reflections, ROI & ripple tiers. Skips modalities. |
| `cxo_non_user` | **CXO Sponsor** | **Non-User** | **17** | 15 | 2 | 21 | Strategic non-user evaluation + roundtable invitation. |
| `other_user` | **Other Senior Leader** | **Coaching User** | **30** | 27 | 3 | 8 | Full coaching survey (modalities, qualitative reflections, and all 6 ripple tiers required). |
| `other_non_user` | **Other Senior Leader** | **Non-User** | **17** | 15 | 2 | 21 | Full non-user evaluation pathway. |

---

## 3. Detailed Category-Wise Walkthrough: CHRO

### Scenario 3.1: CHRO + Coaching User (`chro_user`)
*Total: 30 Questions (24 Required, 6 Optional)*

| Step | Category / Section | Question ID | Question Tag | Type | Status | Question Title |
| :---: | :--- | :--- | :--- | :--- | :---: | :--- |
| **1** | 1. Participant Profile | `Q00_NAME` | Full Name | Text | **Required** | What is your full name? |
| **2** | 1. Participant Profile | `Q00_EMAIL` | Work Email | Email | **Required** | What is your official work email address? |
| **3** | 2. Organization Profile | `Q01` | Industry | Single Select | **Required** | Which industry best describes your organization’s primary business? |
| **4** | 2. Organization Profile | `Q02` | Org size | Single Select | **Required** | Approximately how many employees does your organization have in India? |
| **5** | 2. Organization Profile | `Q03` | Ownership | Single Select | **Required** | Which ownership structure best describes your organization? |
| **6** | 2. Organization Profile | `Q04` | Region HQ | Single Select | **Required** | Where is your organization’s India head office or primary operating HQ located? |
| **7** | 3. Designation & Perspective | `Q05` | Designation & Role | Single Select | **Required** | Which role best describes you? |
| **8** | 3. Designation & Perspective | `Q06` | Coaching exposure | Single Select | **Required** | Which statement best describes your organization’s current use of coaching? |
| **9** | 4. Organizational Coaching Context | `Q10` | Coaching stage | Single Select | **Required** | Which statement best describes your organization’s current coaching stage? |
| **10** | 4. Organizational Coaching Context | `Q11` | Barriers | Multi Select | **Required** | What are the main barriers to wider adoption or deeper embedding of coaching in your organization? |
| **11** | 4. Organizational Coaching Context | `Q12` | Integration | Likert (1–5) | **Required** | To what extent is coaching integrated into leadership, talent, or people processes in your organization? |
| **12** | 4. Organizational Coaching Context | `Q13` | Measurement | Likert (1–5) | **Required** | To what extent does your organization measure coaching using defined indicators, review mechanisms, or outcome data? |
| **13** | 4. Organizational Coaching Context | `Q_SPONSOR` | Business Sponsor | Single Select | **Required** | Who, if anyone, actively participates as a business sponsor in reviewing coaching impact and progress alongside HR / L&D? |
| **14** | 5. Coaching Modalities & Reach | `Q07U` | Modalities | Multi Select | *Optional* | Which coaching modalities are currently used in your organization? |
| **15** | 5. Coaching Modalities & Reach | `Q08U` | Coverage | Multi Select | *Optional* | Which employee groups are currently covered by coaching? |
| **16** | 5. Coaching Modalities & Reach | `Q09U` | Coaching duration | Single Select | *Optional* | For approximately how long has coaching been used in your organization? |
| **17** | 6. Qualitative Insights & Reflections | `Q22` | Open: Key outcome | Open Text | **Required** | In your view, what is the single most significant outcome that coaching has created or could create in your organization? |
| **18** | 6. Qualitative Insights & Reflections | `Q23` | Open: Ripple example | Open Text | **Required** | Please describe one example where coaching impact travelled beyond the individual leader or where it stopped before travelling further. |
| **19** | 6. Qualitative Insights & Reflections | `Q24` | Open: Conditions & risks | Open Text | **Required** | What conditions, enablers, or risks most influence whether coaching impact becomes sustainable in your organization? |
| **20** | 7. The Coaching Ripple Effect & Impact | `Q14U` | Leadership impact | Likert (1–5) | **Required** | Based on what you have observed, to what extent has coaching contributed to leadership-maturity outcomes such as self-awareness, emotional regulation, judgment, accountability, and clarity? |
| **21** | 7. The Coaching Ripple Effect & Impact | `Q15U` | Team impact | Likert (1–5) | **Required** | To what extent has coaching contributed to team outcomes such as trust, psychological safety, collaboration, inclusion, learning, or resilience? |
| **22** | 7. The Coaching Ripple Effect & Impact | `Q16U` | Organization impact | Likert (1–5) | **Required** | To what extent has coaching contributed to organizational outcomes such as succession readiness, leadership pipeline strength, engagement, retention, performance culture, or organizational health? |
| **23** | 7. The Coaching Ripple Effect & Impact | `Q17U` | Business impact | Likert (1–5) | **Required** | To what extent has coaching contributed to business outcomes such as strategic execution, agility, innovation, decision quality, or productivity? |
| **24** | 7. The Coaching Ripple Effect & Impact | `Q18U` | Stakeholder impact | Likert (1–5) | **Required** | To what extent has coaching contributed to stakeholder outcomes such as customer experience, supplier/partner relationships, cross-boundary collaboration, negotiation quality, or stakeholder trust? |
| **25** | 7. The Coaching Ripple Effect & Impact | `Q19U` | Ecosystem impact | Likert (1–5) | **Required** | To what extent has coaching contributed to wider ecosystem or community outcomes such as responsible leadership, mentoring, volunteering, social responsibility, industry capability, or community participation? |
| **26** | 8. Value & ROI of Coaching | `Q20U` | Value / Investment | Likert (1–5) | **Required** | Overall, how would you describe the value created by coaching relative to the time, effort, and money invested? |
| **27** | 8. Value & ROI of Coaching | `Q21U` | Metrics | Multi Select | **Required** | Which indicators does your organization use, or most trust, when judging coaching value? Please select up to five. |
| **28** | 9. Research Panel & Case Study (Optional) | `C1` | Follow-up interview | Single Select | *Optional* | May the NHRD Research Team contact you for a 45–60 minute follow-up executive research interview? |
| **29** | 9. Research Panel & Case Study (Optional) | `C2` | Case study shortlist | Single Select | *Optional* | May the Research Team contact you if your organization's coaching practice is shortlisted for the NHRD White Paper Case Compendium? |
| **30** | 9. Research Panel & Case Study (Optional) | `C3` | Attribution approval | Single Select | *Optional* | If case-study inclusion is considered later, would you require separate organizational approval before any attribution? |

---

### Scenario 3.2: CHRO + Non-User (`chro_non_user`)
*Total: 17 Questions (15 Required, 2 Optional)*

| Step | Category / Section | Question ID | Question Tag | Type | Status | Question Title |
| :---: | :--- | :--- | :--- | :--- | :---: | :--- |
| **1** | 1. Participant Profile | `Q00_NAME` | Full Name | Text | **Required** | What is your full name? |
| **2** | 1. Participant Profile | `Q00_EMAIL` | Work Email | Email | **Required** | What is your official work email address? |
| **3** | 2. Organization Profile | `Q01` | Industry | Single Select | **Required** | Which industry best describes your organization’s primary business? |
| **4** | 2. Organization Profile | `Q02` | Org size | Single Select | **Required** | Approximately how many employees does your organization have in India? |
| **5** | 2. Organization Profile | `Q03` | Ownership | Single Select | **Required** | Which ownership structure best describes your organization? |
| **6** | 2. Organization Profile | `Q04` | Region HQ | Single Select | **Required** | Where is your organization’s India head office or primary operating HQ located? |
| **7** | 3. Designation & Perspective | `Q05` | Designation & Role | Single Select | **Required** | Which role best describes you? |
| **8** | 3. Designation & Perspective | `Q06` | Coaching exposure | Single Select | **Required** | Which statement best describes your organization’s current use of coaching? |
| **9** | 4. Alternative Interventions & Potential | `Q07N` | Alternative interventions | Multi Select | **Required** | Which approaches does your organization currently use instead of, or in place of, formal coaching? Please select all that apply. |
| **10** | 4. Alternative Interventions & Potential | `Q08N` | Potential coverage | Multi Select | **Required** | If coaching were to be used in your organization, which groups would be the most likely starting point? Please select up to three. |
| **11** | 4. Alternative Interventions & Potential | `Q09N` | Adoption horizon | Single Select | **Required** | Which statement best describes your organization’s likely coaching horizon? |
| **12** | 5. Evaluation & Conditions for Adoption | `Q14N` | Evidence needed | Multi Select | **Required** | What evidence would matter most if your organization were evaluating coaching? Please select up to three. |
| **13** | 5. Evaluation & Conditions for Adoption | `Q15N` | Adoption conditions | Multi Select | **Required** | What conditions would most increase the likelihood of coaching adoption in your organization? Please select up to three. |
| **14** | 5. Evaluation & Conditions for Adoption | `Q16N` | Adoption likelihood | Likert (1–5) | **Required** | How likely is your organization to consider a more formal coaching approach over the next 24 months? |
| **15** | 5. Evaluation & Conditions for Adoption | `Q17N` | Perceived value | Single Select | **Required** | If your organization were to adopt coaching, where do you believe it would be most likely to add value first? |
| **16** | 6. Strategic Outlook & Reflections (Optional) | `Q22N` | Strategic Outlook | Open Text | *Optional* | In your view, what is the single biggest question, reservation, or potential opportunity your organization sees regarding executive coaching? |
| **17** | 7. Executive Roundtable Invitation (Optional) | `C1N` | Executive Roundtable | Single Select | *Optional* | Would you like an invitation to an exclusive, closed-door NHRD Roundtable on 'Building the Business Case & Measuring ROI for Leadership Development'? |

---

## 4. Master Matrix: All 38 Questions Across All 10 Scenarios

Legend:
- **Req**: Question is active and mandatory to proceed.
- **Opt**: Question is active but respondent can skip without selecting an answer.
- **Skip**: Question is omitted completely for this role/route.

| Cat # | Category Name | QID | Tag | Route | CHRO User | CHRO Non | CLO User | CLO Non | L&D User | L&D Non | CXO User | CXO Non | Other User | Other Non |
| :---: | :--- | :--- | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **1** | Participant Profile | `Q00_NAME` | Full Name | all | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** |
| **1** | Participant Profile | `Q00_EMAIL` | Work Email | all | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** |
| **2** | Organization Profile | `Q01` | Industry | all | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** |
| **2** | Organization Profile | `Q02` | Org size | all | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** |
| **2** | Organization Profile | `Q03` | Ownership | all | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** |
| **2** | Organization Profile | `Q04` | Region HQ | all | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** |
| **3** | Designation & Perspective | `Q05` | Designation & Role | all | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** |
| **3** | Designation & Perspective | `Q06` | Coaching exposure | all | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** | **Req** |
| **4** | Organizational Coaching Context | `Q10` | Coaching stage | user_only | **Req** | *Skip* | **Req** | *Skip* | **Req** | *Skip* | *Skip* | *Skip* | **Req** | *Skip* |
| **4** | Organizational Coaching Context | `Q11` | Barriers | user_only | **Req** | *Skip* | *Opt* | *Skip* | **Req** | *Skip* | *Skip* | *Skip* | **Req** | *Skip* |
| **4** | Organizational Coaching Context | `Q12` | Integration | user_only | **Req** | *Skip* | **Req** | *Skip* | **Req** | *Skip* | *Skip* | *Skip* | **Req** | *Skip* |
| **4** | Organizational Coaching Context | `Q13` | Measurement | user_only | **Req** | *Skip* | **Req** | *Skip* | **Req** | *Skip* | *Skip* | *Skip* | **Req** | *Skip* |
| **4** | Organizational Coaching Context | `Q_SPONSOR` | Business Sponsor | user_only | **Req** | *Skip* | **Req** | *Skip* | **Req** | *Skip* | **Req** | *Skip* | **Req** | *Skip* |
| **5** | Coaching Modalities & Reach | `Q07U` | Modalities | user_only | *Opt* | *Skip* | **Req** | *Skip* | **Req** | *Skip* | *Skip* | *Skip* | **Req** | *Skip* |
| **5** | Coaching Modalities & Reach | `Q08U` | Coverage | user_only | *Opt* | *Skip* | **Req** | *Skip* | **Req** | *Skip* | *Skip* | *Skip* | **Req** | *Skip* |
| **5** | Coaching Modalities & Reach | `Q09U` | Coaching duration | user_only | *Opt* | *Skip* | **Req** | *Skip* | **Req** | *Skip* | *Skip* | *Skip* | **Req** | *Skip* |
| **6** | Qualitative Insights & Reflections | `Q22` | Open: Key outcome | user_only | **Req** | *Skip* | **Req** | *Skip* | **Req** | *Skip* | **Req** | *Skip* | **Req** | *Skip* |
| **6** | Qualitative Insights & Reflections | `Q23` | Open: Ripple example | user_only | **Req** | *Skip* | **Req** | *Skip* | **Req** | *Skip* | **Req** | *Skip* | **Req** | *Skip* |
| **6** | Qualitative Insights & Reflections | `Q24` | Open: Conditions & risks | user_only | **Req** | *Skip* | **Req** | *Skip* | **Req** | *Skip* | **Req** | *Skip* | **Req** | *Skip* |
| **7** | The Coaching Ripple Effect & Impact | `Q14U` | Leadership impact | user_only | **Req** | *Skip* | **Req** | *Skip* | **Req** | *Skip* | **Req** | *Skip* | **Req** | *Skip* |
| **7** | The Coaching Ripple Effect & Impact | `Q15U` | Team impact | user_only | **Req** | *Skip* | **Req** | *Skip* | **Req** | *Skip* | **Req** | *Skip* | **Req** | *Skip* |
| **7** | The Coaching Ripple Effect & Impact | `Q16U` | Organization impact | user_only | **Req** | *Skip* | **Req** | *Skip* | **Req** | *Skip* | **Req** | *Skip* | **Req** | *Skip* |
| **7** | The Coaching Ripple Effect & Impact | `Q17U` | Business impact | user_only | **Req** | *Skip* | *Skip* | *Skip* | *Skip* | *Skip* | **Req** | *Skip* | **Req** | *Skip* |
| **7** | The Coaching Ripple Effect & Impact | `Q18U` | Stakeholder impact | user_only | **Req** | *Skip* | *Skip* | *Skip* | *Skip* | *Skip* | **Req** | *Skip* | **Req** | *Skip* |
| **7** | The Coaching Ripple Effect & Impact | `Q19U` | Ecosystem impact | user_only | **Req** | *Skip* | *Skip* | *Skip* | *Skip* | *Skip* | **Req** | *Skip* | **Req** | *Skip* |
| **8** | Value & ROI of Coaching | `Q20U` | Value / Investment | user_only | **Req** | *Skip* | **Req** | *Skip* | *Skip* | *Skip* | **Req** | *Skip* | **Req** | *Skip* |
| **8** | Value & ROI of Coaching | `Q21U` | Metrics | user_only | **Req** | *Skip* | **Req** | *Skip* | **Req** | *Skip* | *Skip* | *Skip* | **Req** | *Skip* |
| **9** | Research Panel & Case Study (Optional) | `C1` | Follow-up interview | user_only | *Opt* | *Skip* | *Opt* | *Skip* | *Opt* | *Skip* | *Opt* | *Skip* | *Opt* | *Skip* |
| **9** | Research Panel & Case Study (Optional) | `C2` | Case study shortlist | user_only | *Opt* | *Skip* | *Opt* | *Skip* | *Opt* | *Skip* | *Opt* | *Skip* | *Opt* | *Skip* |
| **9** | Research Panel & Case Study (Optional) | `C3` | Attribution approval | user_only | *Opt* | *Skip* | *Opt* | *Skip* | *Opt* | *Skip* | *Opt* | *Skip* | *Opt* | *Skip* |
| **4** | Alternative Interventions & Potential | `Q07N` | Alternative interventions | non_user_only | *Skip* | **Req** | *Skip* | **Req** | *Skip* | **Req** | *Skip* | **Req** | *Skip* | **Req** |
| **4** | Alternative Interventions & Potential | `Q08N` | Potential coverage | non_user_only | *Skip* | **Req** | *Skip* | **Req** | *Skip* | **Req** | *Skip* | **Req** | *Skip* | **Req** |
| **4** | Alternative Interventions & Potential | `Q09N` | Adoption horizon | non_user_only | *Skip* | **Req** | *Skip* | **Req** | *Skip* | **Req** | *Skip* | **Req** | *Skip* | **Req** |
| **5** | Evaluation & Conditions for Adoption | `Q14N` | Evidence needed | non_user_only | *Skip* | **Req** | *Skip* | **Req** | *Skip* | **Req** | *Skip* | **Req** | *Skip* | **Req** |
| **5** | Evaluation & Conditions for Adoption | `Q15N` | Adoption conditions | non_user_only | *Skip* | **Req** | *Skip* | **Req** | *Skip* | **Req** | *Skip* | **Req** | *Skip* | **Req** |
| **5** | Evaluation & Conditions for Adoption | `Q16N` | Adoption likelihood | non_user_only | *Skip* | **Req** | *Skip* | **Req** | *Skip* | **Req** | *Skip* | **Req** | *Skip* | **Req** |
| **5** | Evaluation & Conditions for Adoption | `Q17N` | Perceived value | non_user_only | *Skip* | **Req** | *Skip* | **Req** | *Skip* | **Req** | *Skip* | **Req** | *Skip* | **Req** |
| **6** | Strategic Outlook & Reflections (Optional) | `Q22N` | Strategic Outlook | non_user_only | *Skip* | *Opt* | *Skip* | *Opt* | *Skip* | *Opt* | *Skip* | *Opt* | *Skip* | *Opt* |
| **7** | Executive Roundtable Invitation (Optional) | `C1N` | Executive Roundtable | non_user_only | *Skip* | *Opt* | *Skip* | *Opt* | *Skip* | *Opt* | *Skip* | *Opt* | *Skip* | *Opt* |
| | **Totals** | | | | **30** | **17** | **27** | **17** | **26** | **17** | **22** | **17** | **30** | **17** |

---

## 5. CSV Files Reference

The following CSV files in the project repository reflect this complete structure:

1. **Category & Question Master Matrix**:
   - File: [`questionnaire_scenarios_matrix.csv`](file:///Users/xmonks/xmonks%20websites%20&%20projects/formtype/questionnaire_scenarios_matrix.csv)
   - Public URL: [`public/questionnaire_scenarios_matrix.csv`](file:///Users/xmonks/xmonks%20websites%20&%20projects/formtype/public/questionnaire_scenarios_matrix.csv)

2. **Step-by-Step Flow For Every Scenario**:
   - File: [`questionnaire_all_scenarios_flow.csv`](file:///Users/xmonks/xmonks%20websites%20&%20projects/formtype/questionnaire_all_scenarios_flow.csv)
   - Public URL: [`public/questionnaire_all_scenarios_flow.csv`](file:///Users/xmonks/xmonks%20websites%20&%20projects/formtype/public/questionnaire_all_scenarios_flow.csv)
