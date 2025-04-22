import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Upload, ChevronRight, CheckCircle, FileText, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { Input, FormGroup } from '../components/ui/FormElements';

export default function BillUpload() {
  const { t } = useLanguage();
  const [file, setFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const newFile = e.dataTransfer.files[0];
      validateAndSetFile(newFile);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const newFile = e.target.files[0];
      validateAndSetFile(newFile);
    }
  };

  const validateAndSetFile = (file: File) => {
    // Check file type
    const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png', 'image/jpg'];
    if (!allowedTypes.includes(file.type)) {
      setUploadError('Invalid file type. Please upload a PDF or image file (JPG, PNG).');
      return;
    }
    
    // Check file size (10MB max)
    if (file.size > 10 * 1024 * 1024) {
      setUploadError('File is too large. Maximum file size is 10MB.');
      return;
    }
    
    setFile(file);
    setUploadError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!file) {
      setUploadError('Please upload your electricity bill');
      return;
    }
    
    // Simulate upload process
    setIsUploading(true);
    setUploadError(null);
    
    try {
      // In a real app, you would upload the file to a server here
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setUploadSuccess(true);
    } catch (error) {
      setUploadError('An error occurred during upload. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative py-20 bg-orange-500">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('billUpload.title')}
            </h1>
            <p className="text-xl text-white mb-6">
              {t('billUpload.subtitle')}
            </p>
            <div className="flex items-center justify-center text-sm md:text-base text-white">
              <Link to="/" className="hover:underline">
                {t('nav.home')}
              </Link>
              <ChevronRight className="mx-2 h-4 w-4" />
              <Link to="/calculator" className="hover:underline">
                {t('nav.calculator')}
              </Link>
              <ChevronRight className="mx-2 h-4 w-4" />
              <span>{t('nav.billUpload')}</span>
            </div>
          </div>
        </div>
        
        {/* Wave Shape */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="#ffffff">
            <path d="M0,64L80,80C160,96,320,128,480,128C640,128,800,96,960,80C1120,64,1280,64,1360,64L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      {/* Bill Upload Form */}
      <Section spacing="lg">
        <div className="max-w-4xl mx-auto">
          {uploadSuccess ? (
            <Card className="p-8 text-center">
              <div className="flex justify-center mb-6">
                <CheckCircle className="w-16 h-16 text-green-500" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Upload Successful!</h2>
              <p className="text-lg text-gray-600 mb-6">
                Thank you for uploading your electricity bill. Our team will analyze it and send you a detailed solar quote via email within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/calculator">
                  <Button variant="outline">
                    Back to Calculator
                  </Button>
                </Link>
                <Link to="/">
                  <Button>
                    Return to Home
                  </Button>
                </Link>
              </div>
            </Card>
          ) : (
            <Card className="p-8">
              <form onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Upload Your Electricity Bill</h2>
                
                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <Input
                    id="name"
                    name="name"
                    label="Your Name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                  />
                  <Input
                    id="phone"
                    name="phone"
                    label="Phone Number"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleFormChange}
                    required
                  />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    label="Email Address"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                  />
                  <Input
                    id="address"
                    name="address"
                    label="Installation Address"
                    placeholder="Enter your address"
                    value={formData.address}
                    onChange={handleFormChange}
                    required
                  />
                </div>
                
                {/* File Dropzone */}
                <FormGroup>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Upload Electricity Bill
                  </label>
                  <div 
                    className={`
                      border-2 border-dashed rounded-lg p-8 text-center cursor-pointer
                      ${dragActive ? 'border-orange-500 bg-orange-50' : 'border-gray-300'}
                      ${uploadError ? 'border-red-300' : ''}
                    `}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                    onClick={() => document.getElementById('file-upload')?.click()}
                  >
                    <input 
                      id="file-upload" 
                      type="file" 
                      className="hidden" 
                      onChange={handleFileChange}
                      accept=".pdf,.jpg,.jpeg,.png"
                    />
                    <div className="flex flex-col items-center">
                      <Upload className="w-12 h-12 text-gray-400 mb-4" />
                      <p className="text-lg font-medium text-gray-700 mb-2">
                        {t('billUpload.dropzone')}
                      </p>
                      <p className="text-sm text-gray-500 mb-2">
                        {t('billUpload.formats')}
                      </p>
                      {file && (
                        <div className="mt-4 flex items-center p-2 bg-green-50 rounded-md text-green-700">
                          <FileText className="w-5 h-5 mr-2" />
                          <span>{file.name}</span>
                        </div>
                      )}
                      {uploadError && (
                        <div className="mt-4 flex items-center text-red-500">
                          <AlertCircle className="w-5 h-5 mr-2" />
                          <span>{uploadError}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </FormGroup>
                
                <Button type="submit" fullWidth size="lg" isLoading={isUploading}>
                  {isUploading ? t('billUpload.processing') : t('common.submit')}
                </Button>
              </form>
            </Card>
          )}
        </div>
      </Section>

      {/* FAQ Section */}
      <Section background="light" spacing="lg">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-800">What information do you extract from my bill?</h3>
              <p className="text-gray-600">
                We analyze your monthly consumption patterns, peak usage, connection type, and sanctioned load to design an optimal solar system for your needs.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-800">Is my bill information secure?</h3>
              <p className="text-gray-600">
                Yes, your bill data is encrypted and only used for calculating your solar needs. We don't share your information with third parties.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-800">How long does it take to receive my solar quote?</h3>
              <p className="text-gray-600">
                You'll receive your detailed solar quote via email within 24 hours of uploading your bill.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-800">What if I don't have a digital copy of my bill?</h3>
              <p className="text-gray-600">
                You can take a clear photo of your paper bill and upload it, or use our <Link to="/manual-calculator" className="text-orange-500 hover:underline">manual calculator</Link> to enter your appliance usage instead.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* WhatsApp Help Section */}
      <Section spacing="md" className="text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Need Help With Your Bill Upload?
        </h2>
        <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
          Our solar experts are available on WhatsApp to assist you with your bill upload or any other questions you might have.
        </p>
        <a 
          href="https://wa.me/919309865542?text=I%20need%20help%20uploading%20my%20bill%20for%20solar%20quote" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full transition-colors shadow-md"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Chat with us on WhatsApp
        </a>
      </Section>
    </div>
  );
}