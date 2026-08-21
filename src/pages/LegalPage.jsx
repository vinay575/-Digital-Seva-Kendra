import { useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import './legal.css'

const legalContent = {
  terms: {
    title: 'Terms & Conditions',
    lastUpdated: 'January 1, 2026',
    sections: [
      {
        heading: '1. Acceptance of Terms',
        text: 'By accessing and using the Digital Seva Kendra website and services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services.'
      },
      {
        heading: '2. Services Offered',
        text: 'Digital Seva Kendra provides digital services including but not limited to banking services, bill payments, travel booking, government registrations, tax filing, and government scheme enrollments. We reserve the right to modify or discontinue any service at any time.'
      },
      {
        heading: '3. User Eligibility',
        text: 'Our services are available to individuals who are at least 18 years of age and capable of forming a binding contract. By using our services, you represent and warrant that you meet these eligibility requirements.'
      },
      {
        heading: '4. Account Registration',
        text: 'To access certain features, you may need to register for an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.'
      },
      {
        heading: '5. Fees and Payments',
        text: 'Service fees are as specified at the time of transaction. All payments are non-refundable unless otherwise stated. We reserve the right to change our fee structure with appropriate notice.'
      },
      {
        heading: '6. User Responsibilities',
        text: 'You agree to provide accurate and complete information when using our services. You shall not use our platform for any unlawful purpose or in any manner that could damage, disable, or impair the service.'
      },
      {
        heading: '7. Privacy Policy',
        text: 'Your use of our services is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand our practices regarding your personal data.'
      },
      {
        heading: '8. Limitation of Liability',
        text: 'Digital Seva Kendra shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.'
      },
      {
        heading: '9. Indemnification',
        text: 'You agree to indemnify and hold harmless Digital Seva Kendra, its officers, directors, employees, and agents from any claims, losses, or damages arising from your use of our services.'
      },
      {
        heading: '10. Modifications',
        text: 'We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting. Your continued use of our services constitutes acceptance of the modified Terms.'
      },
      {
        heading: '11. Governing Law',
        text: 'These Terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in New Delhi.'
      },
      {
        heading: '12. Contact Information',
        text: 'For any questions regarding these Terms, please contact us at info@csce-governance.com or visit our office at Electronics Niketan, 3rd Floor, 6 CGO Complex, Lodhi Road, New Delhi - 110003.'
      }
    ]
  },
  privacy: {
    title: 'Privacy Policy',
    lastUpdated: 'January 1, 2026',
    sections: [
      {
        heading: '1. Information We Collect',
        text: 'We collect information you provide directly, including name, email address, phone number, Aadhaar number, PAN, and other identification documents necessary for providing our services.'
      },
      {
        heading: '2. How We Use Your Information',
        text: 'We use your information to provide and improve our services, process transactions, send notifications, verify your identity, and comply with legal obligations.'
      },
      {
        heading: '3. Information Sharing',
        text: 'We may share your information with banking partners, government agencies, payment processors, and service providers as necessary to fulfill your requests. We do not sell your personal information to third parties.'
      },
      {
        heading: '4. Data Security',
        text: 'We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.'
      },
      {
        heading: '5. Data Retention',
        text: 'We retain your information for as long as necessary to provide our services and comply with legal obligations. You may request deletion of your data subject to certain exceptions.'
      },
      {
        heading: '6. Your Rights',
        text: 'You have the right to access, correct, or delete your personal information. You may also opt out of certain communications and request data portability as per applicable laws.'
      },
      {
        heading: '7. Cookies and Tracking',
        text: 'We use cookies and similar technologies to enhance your experience, analyze usage patterns, and improve our services. You can control cookie settings through your browser preferences.'
      },
      {
        heading: '8. Children\'s Privacy',
        text: 'Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children. If we become aware of such collection, we will take steps to delete it.'
      },
      {
        heading: '9. Changes to This Policy',
        text: 'We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last Updated" date.'
      },
      {
        heading: '10. Contact Us',
        text: 'If you have any questions about this Privacy Policy, please contact us at info@csce-governance.com.'
      }
    ]
  },
  legal: {
    title: 'Legal Documents',
    lastUpdated: 'January 1, 2026',
    sections: [
      {
        heading: '1. Company Information',
        text: 'Digital Seva Kendra is operated by CSCE Governance, registered at Electronics Niketan, 3rd Floor, 6 CGO Complex, Lodhi Road, New Delhi - 110003, India.'
      },
      {
        heading: '2. Regulatory Compliance',
        text: 'Digital Seva Kendra operates in compliance with all applicable Indian laws and regulations, including the Information Technology Act, 2000, RBI guidelines, and NPCI norms for AEPS and UPI services.'
      },
      {
        heading: '3. Grievance Redressal',
        text: 'For any grievances, please contact our Grievance Officer at grievance@csce-governance.com. We aim to resolve all complaints within 30 business days of receipt.'
      },
      {
        heading: '4. Dispute Resolution',
        text: 'Any disputes arising from the use of our services shall first be attempted to be resolved through mediation. If mediation fails, disputes shall be subject to arbitration in New Delhi under the Arbitration and Conciliation Act, 1996.'
      },
      {
        heading: '5. Intellectual Property',
        text: 'All content, trademarks, logos, and materials on this website are the property of Digital Seva Kendra or its licensors and are protected by applicable intellectual property laws.'
      },
      {
        heading: '6. Force Majeure',
        text: 'Digital Seva Kendra shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, including natural disasters, government actions, or network disruptions.'
      },
      {
        heading: '7. Severability',
        text: 'If any provision of our terms is found to be unenforceable, the remaining provisions shall continue in full force and effect.'
      },
      {
        heading: '8. Entire Agreement',
        text: 'These legal documents constitute the entire agreement between you and Digital Seva Kendra regarding the use of our services, superseding any prior agreements.'
      }
    ]
  }
}

export default function LegalPage() {
  const location = useLocation()
  const path = location.pathname.replace(/^\//, '').replace(/\/$/, '')
  const page = legalContent[path]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [path])

  if (!page) {
    return (
      <div className="legal-page">
        <section className="legal-hero">
          <div className="container">
            <h1>Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <Link to="/" className="btn btn-saffron">Go Home</Link>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="legal-page">
      <section className="legal-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>{page.title}</span>
          </nav>
          <h1>{page.title}</h1>
          <p className="legal-hero-sub">Last Updated: {page.lastUpdated}</p>
        </div>
      </section>

      <section className="section legal-content-section">
        <div className="container">
          <div className="legal-content">
            {page.sections.map((section, i) => (
              <div className="legal-section" key={i}>
                <h2>{section.heading}</h2>
                <p>{section.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
