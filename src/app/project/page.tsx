"use client";

import React, { useState } from 'react';

const projects = [
  {
    title: 'Nationwide Observability Rollout',
    subtitle: 'Ansible & Dynatrace | Telecommunications',
    problem: 'Deploying monitoring agents manually across 1,000+ nodes caused significant operational overhead and inconsistent data ingestion.',
    action: 'Developed Ansible Playbooks for automated OneAgent lifecycle management. Integrated with CI/CD pipelines to ensure every new instance is born with monitoring enabled.',
    result: 'Achieved 80% faster deployment and unified infrastructure visibility for a massive-scale telecom network.',
    date: 'Jan 2024',
    categories: ['automation', 'observability']
  },
  {
    title: 'Microservices Reliability Engineering',
    subtitle: 'Kubernetes & GKE | Digital Media',
    problem: 'Lack of visibility into containerized workloads led to intermittent service degradations during peak traffic.',
    action: 'Configured Kubernetes monitoring via Dynatrace Operator. Established Service Level Objectives (SLOs) to track error budgets and latency thresholds.',
    result: 'Reduced MTTR by 40% and improved system reliability for high-traffic streaming services.',
    date: 'Aug 2023',
    categories: ['observability', 'cloud']
  }
];

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = projects.filter(project => filter === 'all' || project.categories.includes(filter));

  return (
    <section id="projects" style={{ minHeight: '100vh', paddingTop: '5rem' }}>
      <h2 style={{ fontSize: '3rem', borderBottom: '2px solid var(--accent-color)', paddingBottom: '0.5rem', marginBottom: '2rem' }}>
        Technical <span className="text-primary">Projects</span>
      </h2>
      <p style={{ fontSize: '1.2rem', marginBottom: '3rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
        A collection of engineering challenges, automated solutions, and infrastructure modernizations. <br />
        <small style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>*Company names are generalized to comply with Non-Disclosure Agreements (NDA).</small>
      </p>

      <div style={{ marginBottom: '3rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {['all', 'automation', 'observability', 'cloud'].map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            style={{
              padding: '0.6rem 1.5rem',
              borderRadius: '30px',
              border: `1px solid ${filter === cat ? 'var(--accent-color)' : 'var(--card-border)'}`,
              background: filter === cat ? 'var(--accent-color)' : 'var(--card-bg)',
              color: filter === cat ? '#000' : 'var(--text-primary)',
              cursor: 'pointer',
              textTransform: 'capitalize',
              fontWeight: 600,
              fontSize: '1rem',
              transition: 'all 0.3s ease'
            }}
          >
            {cat === 'cloud' ? 'Cloud/K8s' : cat}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {filteredProjects.map((project, idx) => (
          <div key={idx} className="glass-card" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
              <div style={{ flex: '1 1 300px' }}>
                <h3 style={{ marginBottom: '0.5rem', color: '#fff', fontSize: '1.8rem' }}>{project.title}</h3>
                <div style={{ color: 'var(--accent-color)', fontWeight: 600, marginBottom: '1.5rem', fontSize: '1.1rem' }}>{project.subtitle}</div>
                <p><strong>Problem:</strong> {project.problem}</p>
                <p><strong>Action:</strong> {project.action}</p>
                <p><strong>Result:</strong> {project.result}</p>
              </div>
              <div style={{ color: 'var(--accent-color)', fontWeight: 600, whiteSpace: 'nowrap', fontSize: '1.2rem' }}>
                {project.date}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <footer style={{ marginTop: '5rem', textAlign: 'center', color: 'var(--text-secondary)', borderTop: '1px solid var(--card-border)', paddingTop: '2rem' }}>
        <p style={{ marginBottom: '0.5rem' }}>© 2026 Ridho Nurul Adilla. All rights reserved.</p>
        <small>Site reliability monitored by <a href="https://uptimerobot.com/?red=ridhon" target="_blank" rel="noreferrer" style={{ textDecoration: 'underline', color: 'var(--text-secondary)' }}>UptimeRobot</a></small>
      </footer>
    </section>
  );
}
