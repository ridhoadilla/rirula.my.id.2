"use client";

import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export default function Home() {
  const chartData = {
    labels: ['Observability', 'Cloud (GCP/K8s)', 'Automation', 'Linux Admin', 'Operations', 'Leadership'],
    datasets: [
      {
        label: 'Proficiency Level',
        data: [95, 90, 85, 92, 80, 75],
        fill: true,
        backgroundColor: 'rgba(0, 210, 255, 0.2)',
        borderColor: '#00d2ff',
        pointBackgroundColor: '#00d2ff',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#00d2ff',
      },
    ],
  };

  const chartOptions = {
    elements: {
      line: { borderWidth: 3 },
    },
    scales: {
      r: {
        angleLines: { color: 'rgba(255,255,255,0.1)' },
        grid: { color: 'rgba(255,255,255,0.1)' },
        pointLabels: { color: '#e2e8f0', font: { size: 14 } },
        ticks: { display: false },
      },
    },
    plugins: {
      legend: { display: false },
    },
  };

  return (
    <>
      <section id="about">
        <h1>Ridho <span className="text-primary">Nurul Adilla</span></h1>
        <div style={{ marginBottom: '2rem' }}>
          <a href="mailto:ridhonuruladilla@gmail.com" style={{ color: 'var(--text-secondary)' }}>ridhonuruladilla@gmail.com</a>
          <span style={{ margin: '0 10px', color: 'var(--text-secondary)' }}>·</span>
          <a href="https://wa.me/6285710040030" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }}>WhatsApp Me</a>
        </div>
        <p style={{ fontSize: '1.2rem', maxWidth: '800px' }}>
          I am an experienced <b>Cloud & Observability Engineer</b> with over 5 years of expertise in leveraging agile frameworks to provide robust system synopsis and high-level overviews. Specializing in <b>Application Performance Monitoring (APM)</b>, automation using <b>Ansible</b>, and managing containerized workloads in <b>GCP</b> and <b>OpenShift</b> environments.
        </p>
        <div className="social-icons">
          <a className="social-icon" href="https://www.linkedin.com/in/ridho-nurul-adilla/"><i className="fab fa-linkedin-in"></i></a>
          <a className="social-icon" href="https://github.com/ridhoadilla"><i className="fab fa-github"></i></a>
        </div>
      </section>

      <section id="experience">
        <h2>Experience</h2>
        
        <div className="glass-card" style={{ marginBottom: '2rem' }}>
          <h3>Operational Manager</h3>
          <p className="text-primary" style={{ marginBottom: '0.5rem', fontWeight: 600 }}>PT ASTRA GRAPHIA INFORMATION TECHNOLOGY</p>
          <p style={{ fontStyle: 'italic', marginBottom: '1rem' }}>Managed Services Operations | July 2021 - Present</p>
          <ul style={{ listStylePosition: 'inside', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
            <li>Overseeing daily operational workflows to ensure high system availability and 100% alignment with enterprise Service Level Agreements (SLAs).</li>
            <li>Leading cross-functional technical teams to streamline IT operations, focusing on resource management and process efficiency.</li>
            <li>Managing stakeholder communication and delivering strategic performance audits to improve service delivery quality.</li>
            <li>Implementing operational best practices to proactively minimize downtime across managed infrastructure.</li>
          </ul>
        </div>

        <div className="glass-card" style={{ marginBottom: '2rem' }}>
          <h3>System Engineer</h3>
          <p className="text-primary" style={{ marginBottom: '0.5rem', fontWeight: 600 }}>PT ASTRA GRAPHIA INFORMATION TECHNOLOGY</p>
          <ul style={{ listStylePosition: 'inside', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
            <li>Managed and optimized full-stack observability across diverse environments, including Bare Metal, VMware, Kubernetes (GKE), Docker, and OpenShift (OCP).</li>
            <li>Engineered automated deployment workflows for Dynatrace agents and designed advanced monitoring dashboards to provide real-time business insights.</li>
            <li>Tailored data ingestion and monitoring configurations to meet specific enterprise requirements, ensuring comprehensive visibility across complex application stacks.</li>
          </ul>
        </div>
        
        <div className="glass-card" style={{ marginBottom: '2rem' }}>
          <h3>System Administrator</h3>
          <p className="text-primary" style={{ marginBottom: '0.5rem', fontWeight: 600 }}>VisionPlus (PT. OTT MNC-MNCGROUP)</p>
          <p style={{ fontStyle: 'italic', marginBottom: '1rem' }}>April 2020 - June 2021</p>
          <ul style={{ listStylePosition: 'inside', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
            <li>Maintained high-availability server and application environments across hypervisor-based virtual machines (VMs).</li>
            <li>Administered internal DNS infrastructure and core network services to ensure reliable internal connectivity.</li>
            <li>Optimized CI/CD workflows by managing and maintaining automated job pipelines in Jenkins for seamless application delivery.</li>
          </ul>
        </div>

        <div className="glass-card" style={{ marginBottom: '2rem' }}>
          <h3>L2 Project Support</h3>
          <p className="text-primary" style={{ marginBottom: '0.5rem', fontWeight: 600 }}>PT. Aplikanusa Lintasarta</p>
          <p style={{ fontStyle: 'italic', marginBottom: '1rem' }}>October 2018 - October 2019</p>
          <ul style={{ listStylePosition: 'inside', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
            <li>Maintained and monitored enterprise-grade server infrastructure and network appliances to ensure peak operational performance.</li>
            <li>Orchestrated backup and recovery strategies using Veeam, ensuring data integrity and business continuity across diverse server environments.</li>
          </ul>
        </div>
      </section>

      <section id="education">
        <h2>Education</h2>
        <div className="glass-card" style={{ marginBottom: '2rem' }}>
          <h3>University Gunadarma</h3>
          <p className="text-primary" style={{ marginBottom: '0.5rem', fontWeight: 600 }}>Bachelor of Computer Science</p>
          <p style={{ color: 'var(--text-secondary)' }}>Computer Science - Networking Track | GPA: 3.25 | October 2014 - May 2018</p>
        </div>
        <div className="glass-card">
          <h3>SMK N 26 Vocational High School</h3>
          <p className="text-primary" style={{ marginBottom: '0.5rem', fontWeight: 600 }}>Computer Network Engineering</p>
          <p style={{ color: 'var(--text-secondary)' }}>GPA: 3.00 | June 2008 - June 2011</p>
        </div>
      </section>

      <section id="skills">
        <h2>Skills & Competencies</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
          <div className="glass-card" style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h3 style={{ marginBottom: '2rem' }}>Skill Proficiency Matrix</h3>
            <div style={{ width: '100%', maxWidth: '350px' }}>
              <Radar data={chartData} options={chartOptions as any} />
            </div>
          </div>
          
          <div className="glass-card" style={{ flex: '1 1 400px' }}>
            <h3 style={{ marginBottom: '2rem' }}>Programming Languages & Tools</h3>
            <div style={{ fontSize: '3rem', display: 'flex', gap: '1rem', flexWrap: 'wrap', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
              <i className="devicon-kubernetes-plain" style={{ transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color = '#326ce5'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}></i>
              <i className="devicon-linux-plain" style={{ transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color = '#fcc624'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}></i>
              <i className="devicon-ansible-plain" style={{ transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color = '#ee0000'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}></i>
              <i className="devicon-docker-plain" style={{ transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color = '#2496ed'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}></i>
              <i className="devicon-googlecloud-plain" style={{ transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color = '#4285f4'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}></i>
              <i className="devicon-jenkins-plain" style={{ transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color = '#d24939'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}></i>
            </div>
            
            <h3 style={{ marginBottom: '2rem' }}>Workflow</h3>
            <ul style={{ listStyle: 'none', color: 'var(--text-secondary)', lineHeight: '2' }}>
              <li><i className="fas fa-check text-primary" style={{ marginRight: '10px' }}></i>Operational Management & SLAs</li>
              <li><i className="fas fa-check text-primary" style={{ marginRight: '10px' }}></i>Full-stack Observability (Dynatrace)</li>
              <li><i className="fas fa-check text-primary" style={{ marginRight: '10px' }}></i>CI/CD Pipeline Automation</li>
              <li><i className="fas fa-check text-primary" style={{ marginRight: '10px' }}></i>Agile & Scrum Framework</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="certifications">
        <h2>Certifications</h2>
        <p>Here are my current professional certifications across various cloud and infrastructure platforms:</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div className="glass-card">
            <h3>Google Cloud Engineer Associates</h3>
            <a href="/assets/certificates/AssociateCloudEngineer_google_ridho_nurul_adilla.pdf" target="_blank" rel="noreferrer" className="text-primary" style={{ display: 'inline-block', marginTop: '1rem' }}>
              <i className="fas fa-file-pdf" style={{ marginRight: '10px' }}></i> View Certificate
            </a>
          </div>
          <div className="glass-card">
            <h3>Google Cloud Engineer Professional</h3>
            <a href="/assets/certificates/PCA-ridhona.pdf" target="_blank" rel="noreferrer" className="text-primary" style={{ display: 'inline-block', marginTop: '1rem' }}>
              <i className="fas fa-file-pdf" style={{ marginRight: '10px' }}></i> View Certificate
            </a>
          </div>
          <div className="glass-card">
            <h3>Dynatrace Associate Certification</h3>
            <a href="/assets/certificates/RidhoNurulAdilla_Dynatrace Associate Certification.pdf" target="_blank" rel="noreferrer" className="text-primary" style={{ display: 'inline-block', marginTop: '1rem' }}>
              <i className="fas fa-file-pdf" style={{ marginRight: '10px' }}></i> View Certificate
            </a>
          </div>
        </div>
      </section>

      <section id="interests">
        <h2>Interests</h2>
        <div className="glass-card">
          <p>
            Outside of my professional role, I am an active swimmer and a dedicated tech explorer. I enjoy maintaining my physical fitness through swimming as much as I enjoy maintaining complex infrastructures.
          </p>
          <p>
            When indoors, I am passionate about following sci-fi and fantasy cinema. Most of my free time is spent in my home lab, experimenting with the latest advancements in <b>Virtualization, Containerization, and Linux kernel optimization</b>.
          </p>
        </div>
        
        <footer style={{ marginTop: '5rem', textAlign: 'center', color: 'var(--text-secondary)', borderTop: '1px solid var(--card-border)', paddingTop: '2rem' }}>
          <p style={{ marginBottom: '0.5rem' }}>© 2026 Ridho Nurul Adilla. All rights reserved.</p>
          <small>Site reliability monitored by <a href="https://uptimerobot.com/?red=ridhon" target="_blank" rel="noreferrer" style={{ textDecoration: 'underline' }}>UptimeRobot</a></small>
        </footer>
      </section>
    </>
  );
}
