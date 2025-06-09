import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { User, Target, Heart } from 'lucide-react';
import Button from '../../components/Button';

// Validation schema using Yup
const validationSchema = Yup.object({
  name: Yup.string().required('Name is required').min(2, 'Name must be at least 2 characters'),
  age: Yup.number().required('Age is required').min(18, 'Must be 18 or older').max(120, 'Invalid age'),
  gender: Yup.string().required('Gender is required'),
  fitnessGoals: Yup.array().min(1, 'Select at least one fitness goal'),
  bmi: Yup.number().min(10, 'Invalid BMI').max(50, 'Invalid BMI').nullable(),
  heartRate: Yup.number().min(30, 'Invalid heart rate').max(200, 'Invalid heart rate').nullable(),
  preferences: Yup.array().min(1, 'Select at least one preference'),
});

const ProfileForm = ({ initialValues, onSubmit }) => {
  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <User className="h-6 w-6 mr-2 text-blue-600" />
        Complete Your Profile
      </h2>
      <Formik
        initialValues={initialValues || {
          name: '',
          age: '',
          gender: '',
          fitnessGoals: [],
          bmi: '',
          heartRate: '',
          preferences: [],
        }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <Field
                name="name"
                type="text"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="John Doe"
              />
              <ErrorMessage name="name" component="div" className="text-red-600 text-sm mt-1" />
            </div>

            <div>
              <label htmlFor="age" className="block text-sm font-medium text-gray-700">
                Age
              </label>
              <Field
                name="age"
                type="number"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="25"
              />
              <ErrorMessage name="age" component="div" className="text-red-600 text-sm mt-1" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Gender</label>
              <div className="mt-2 flex space-x-4">
                {['Male', 'Female', 'Other'].map((option) => (
                  <label key={option} className="flex items-center">
                    <Field
                      type="radio"
                      name="gender"
                      value={option.toLowerCase()}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-gray-700">{option}</span>
                  </label>
                ))}
              </div>
              <ErrorMessage name="gender" component="div" className="text-red-600 text-sm mt-1" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 flex items-center">
                <Target className="h-5 w-5 mr-1 text-blue-600" />
                Fitness Goals
              </label>
              <div className="mt-2 grid grid-cols-2 gap-2">
                {['Weight Loss', 'Muscle Gain', 'Endurance', 'Flexibility'].map((goal) => (
                  <label key={goal} className="flex items-center">
                    <Field
                      type="checkbox"
                      name="fitnessGoals"
                      value={goal.toLowerCase()}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-gray-700">{goal}</span>
                  </label>
                ))}
              </div>
              <ErrorMessage name="fitnessGoals" component="div" className="text-red-600 text-sm mt-1" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="bmi" className="block text-sm font-medium text-gray-700">
                  BMI
                </label>
                <Field
                  name="bmi"
                  type="number"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="22.5"
                />
                <ErrorMessage name="bmi" component="div" className="text-red-600 text-sm mt-1" />
              </div>
              <div>
                <label htmlFor="heartRate" className="block text-sm font-medium text-gray-700">
                  Resting Heart Rate
                </label>
                <Field
                  name="heartRate"
                  type="number"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="70"
                />
                <ErrorMessage name="heartRate" component="div" className="text-red-600 text-sm mt-1" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 flex items-center">
                <Heart className="h-5 w-5 mr-1 text-blue-600" />
                Activity Preferences
              </label>
              <div className="mt-2 grid grid-cols-2 gap-2">
                {['Running', 'Yoga', 'HIIT', 'Cycling', 'Swimming'].map((pref) => (
                  <label key={pref} className="flex items-center">
                    <Field
                      type="checkbox"
                      name="preferences"
                      value={pref.toLowerCase()}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-gray-700">{pref}</span>
                  </label>
                ))}
              </div>
              <ErrorMessage name="preferences" component="div" className="text-red-600 text-sm mt-1" />
            </div>

            <Button type="submit" className="w-full">
              Save Profile
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ProfileForm;
