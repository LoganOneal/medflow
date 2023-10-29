## Installation
```bash
yarn install
yarn dev
```

## Inspiration
### The Healthcare Industry in the Untied States is in the midst of a crisis due to the following challenges: 
-  **Growing Demand:** The demand for healthcare services in the United States is steadily increasing due to factors like an aging population, rising chronic disease prevalence, and advances in medical treatments.

- **Physician Shortage:** The Association of American Medical Colleges (AAMC) projects a shortage of up to 139,000 physicians by 2033. 

- **Nurse Shortage:** The American Nurses Association (ANA) predicts a shortage of more than one million registered nurses by 2022.

- **Primary Care Deficit:** There is a significant shortage of primary care providers, including family physicians, general internists, and pediatricians. This impact of this is felt the most in rural areas.

- **Geographic Disparities:** Rural areas, like most of Tennessee, often face more severe shortages of healthcare professionals compared to urban areas. Access to care is a major concern in these regions.

In order to address these deficits, we focused on improving the efficiency of the healthcare ecosystem by building a platform that **consolidates** and **streamlines** medical data through  an **easily accessible and adaptable natural language interface**. 

## What it does
Medchat gives medical professionals quick and efficient access to a wide variety of EMR (Electronic Health Record) systems through natural language. It provides a natural language chat interface, enabling doctors and nurses to engage in conversations while simultaneously accessing and updating patient data in real-time, integrating with pre-existing EMR databases. 

This enables medical professionals to:
1. Streamline and optimize their workflows  **-> saving time**
2. Provide fully context-aware answers to complex medical questions **-> reducing preventable harm**
3. Better curate the overall patient experience **-> improving patient relationships**

## How we built it
LLMs are powerful at generating text, but they can struggle to find relevant information with large contexts. Vector databases, on the other hand, are very efficient at finding similar vectors in a high-dimensional space, making them better at finding relevant information. Medchat uses [Langchain](https://www.langchain.com/) to query a wide variety of databases (like EMRs) using natural language. **The combination of vector database technologies and LLMs is what enables our technology to quickly and effectively retrieve fully context-aware information**. 

## Challenges we ran into
* This was all of our first experience working with vector databases / langchain. 
* We wanted to use the most recent version of NextJS and had to learn how to use the new app router project layout 

## Accomplishments that we're proud of
* We embraced the growth mindset and were willing to work with technologies we did not have previous experience with 
* We built a fully functional MVP that effectively demonstrates our use case and product potential
* We worked together as a team, practicing active listening and taking all perspectives into account 

## What we learned
Through talking to the medical professionals at Vandyhacks, external research, and ideation as a team we gained invaluable insights into the needs of the medical industry. We also gained experience with a variety of new and bleeding edge technologies such a NextJS, Langchain, Tailwind, and Vector based databases. 

## What's next for Medchat
Moving forward, we plan to expand the capabilities of Medchat by incorporating advanced AI-driven features for diagnosis assistance and treatment suggestions. Additionally, we aim to integrate with more EHR systems to ensure broader compatibility. Continuous user feedback and ongoing collaboration with healthcare professionals will remain integral to our development process, ensuring Medchat evolves to meet the evolving needs of the healthcare industry.
