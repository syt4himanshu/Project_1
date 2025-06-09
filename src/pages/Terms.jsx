import React from 'react';
import { FileText } from 'lucide-react';

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <FileText className="h-12 w-12 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-xl text-gray-600">
            Last updated: June 9, 2025
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                By accessing and using FitSphere, you accept and agree to be bound by the terms and conditions of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                FitSphere provides a platform for fitness enthusiasts to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Join and create fitness challenges</li>
                <li>Connect with other fitness enthusiasts</li>
                <li>Track fitness progress and achievements</li>
                <li>Access fitness resources and content</li>
                <li>Participate in community activities</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Responsibilities</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                As a user of FitSphere, you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account</li>
                <li>Use the service in compliance with all applicable laws</li>
                <li>Respect other users and their privacy</li>
                <li>Not engage in any harmful or disruptive behavior</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Health Disclaimer</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                FitSphere is not a medical service. Before starting any fitness program:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Consult with your healthcare provider</li>
                <li>Understand your physical limitations</li>
                <li>Start slowly and progress gradually</li>
                <li>Stop if you experience pain or discomfort</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Intellectual Property</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                All content and materials available on FitSphere, including but not limited to text, graphics, logos, button icons, images, audio clips, digital downloads, and data compilations are the property of FitSphere or its content suppliers and are protected by international copyright laws.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Limitation of Liability</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                FitSphere shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Changes to Terms</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new terms on this page and updating the "Last updated" date.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contact Information</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              <p className="font-medium">
                Email: legal@fitsphere.com<br />
                Address: 123 Fitness Street, San Francisco, CA 94107
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsPage; 