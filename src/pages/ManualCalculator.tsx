import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Calculator, Plus, Trash2, ChevronRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import Card, { CardContent } from '../components/ui/Card';
import { Input, FormGroup } from '../components/ui/FormElements';
import { Appliance } from '../types';

export default function ManualCalculator() {
  const { t } = useLanguage();
  const [appliances, setAppliances] = useState<Appliance[]>([
    { id: '1', name: 'Fan', quantity: 2, wattage: 75, hoursPerDay: 8 },
    { id: '2', name: 'TV', quantity: 1, wattage: 100, hoursPerDay: 6 },
    { id: '3', name: 'Light Bulb', quantity: 5, wattage: 10, hoursPerDay: 6 },
  ]);
  const [showResults, setShowResults] = useState(false);
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

  const handleApplianceChange = (id: string, field: keyof Appliance, value: any) => {
    setAppliances(prevAppliances =>
      prevAppliances.map(appliance =>
        appliance.id === id ? { ...appliance, [field]: value } : appliance
      )
    );
  };

  const addAppliance = () => {
    const newId = String(appliances.length + 1);
    setAppliances([...appliances, { id: newId, name: '', quantity: 1, wattage: 0, hoursPerDay: 0 }]);
  };

  const removeAppliance = (id: string) => {
    setAppliances(appliances.filter(appliance => appliance.id !== id));
  };

  const calculateTotalConsumption = (): number => {
    return appliances.reduce((total, appliance) => {
      return total + (appliance.quantity * appliance.wattage * appliance.hoursPerDay);
    }, 0);
  };

  const calculateSystemSize = (): number => {
    const dailyConsumptionWh = calculateTotalConsumption();
    const dailyConsumptionKWh = dailyConsumptionWh / 1000;
    
    // Assume 5 hours of peak sunlight per day in India and system efficiency of 75%
    const systemSizeKW = dailyConsumptionKWh / (5 * 0.75);
    
    return parseFloat(systemSizeKW.toFixed(2));
  };

  const calculateSavings = (): { monthly: number, annual: number } => {
    const systemSizeKW = calculateSystemSize();
    
    // Assume 4.5 kWh per kW per day generation in India and electricity rate of ₹8 per kWh
    const dailyGenerationKWh = systemSizeKW * 4.5;
    const monthlySavings = dailyGenerationKWh * 30 * 8;
    const annualSavings = monthlySavings * 12;
    
    return {
      monthly: Math.round(monthlySavings),
      annual: Math.round(annualSavings)
    };
  };

  const calculateCarbonReduction = (): number => {
    const systemSizeKW = calculateSystemSize();
    
    // Assume 0.82 kg CO2 per kWh in India's electricity mix
    const dailyGenerationKWh = systemSizeKW * 4.5;
    const annualGenerationKWh = dailyGenerationKWh * 365;
    const carbonReduction = annualGenerationKWh * 0.82;
    
    return Math.round(carbonReduction);
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(true);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative py-20 bg-orange-500">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('manualCalculator.title')}
            </h1>
            <p className="text-xl text-white mb-6">
              {t('manualCalculator.subtitle')}
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
              <span>{t('manualCalculator.title')}</span>
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

      <Section spacing="lg">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8">
            <form onSubmit={handleCalculate}>
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Enter Your Appliance Usage</h2>
              
              {/* Contact Information */}
              {!showResults && (
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
              )}
              
              {/* Appliance List */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">Appliance List</h3>
                  <Button 
                    type="button" 
                    variant="outline" 
                    size="sm"
                    leftIcon={<Plus size={16} />}
                    onClick={addAppliance}
                  >
                    {t('manualCalculator.addAppliance')}
                  </Button>
                </div>
                
                {/* Table Header */}
                <div className="grid grid-cols-12 gap-4 mb-2 font-medium text-gray-600 text-sm border-b border-gray-200 pb-2">
                  <div className="col-span-4 md:col-span-5">{t('manualCalculator.appliance')}</div>
                  <div className="col-span-2">{t('manualCalculator.quantity')}</div>
                  <div className="col-span-2">{t('manualCalculator.wattage')}</div>
                  <div className="col-span-3 md:col-span-2">{t('manualCalculator.hoursPerDay')}</div>
                  <div className="col-span-1"></div>
                </div>
                
                {/* Appliance Rows */}
                <div className="space-y-3">
                  {appliances.map((appliance) => (
                    <div key={appliance.id} className="grid grid-cols-12 gap-4 items-center">
                      <div className="col-span-4 md:col-span-5">
                        <Input
                          id={`appliance-name-${appliance.id}`}
                          placeholder="e.g., Fan, TV, Light"
                          value={appliance.name}
                          onChange={(e) => handleApplianceChange(appliance.id, 'name', e.target.value)}
                          required
                          className="w-full"
                        />
                      </div>
                      <div className="col-span-2">
                        <Input
                          id={`appliance-quantity-${appliance.id}`}
                          type="number"
                          min="1"
                          value={appliance.quantity}
                          onChange={(e) => handleApplianceChange(appliance.id, 'quantity', parseInt(e.target.value) || 0)}
                          required
                          className="w-full"
                        />
                      </div>
                      <div className="col-span-2">
                        <Input
                          id={`appliance-wattage-${appliance.id}`}
                          type="number"
                          min="0"
                          placeholder="W"
                          value={appliance.wattage}
                          onChange={(e) => handleApplianceChange(appliance.id, 'wattage', parseInt(e.target.value) || 0)}
                          required
                          className="w-full"
                        />
                      </div>
                      <div className="col-span-3 md:col-span-2">
                        <Input
                          id={`appliance-hours-${appliance.id}`}
                          type="number"
                          min="0"
                          max="24"
                          step="0.5"
                          placeholder="hrs"
                          value={appliance.hoursPerDay}
                          onChange={(e) => handleApplianceChange(appliance.id, 'hoursPerDay', parseFloat(e.target.value) || 0)}
                          required
                          className="w-full"
                        />
                      </div>
                      <div className="col-span-1 flex justify-center">
                        <button
                          type="button"
                          onClick={() => removeAppliance(appliance.id)}
                          className="text-red-500 hover:text-red-700 transition-colors"
                          disabled={appliances.length <= 1}
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Total Consumption */}
                <div className="mt-6 p-4 bg-gray-50 rounded-md">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">{t('manualCalculator.totalConsumption')}:</span>
                    <span className="font-bold text-lg text-gray-800">
                      {calculateTotalConsumption().toLocaleString()} Wh/day
                    </span>
                  </div>
                </div>
              </div>
              
              {!showResults ? (
                <Button type="submit" fullWidth size="lg">
                  {t('common.calculate')}
                </Button>
              ) : (
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-6 text-gray-800">
                    {t('manualCalculator.results.title')}
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="p-6 bg-orange-50 border border-orange-100">
                      <h4 className="font-medium text-gray-700 mb-2">
                        {t('manualCalculator.results.systemSize')}
                      </h4>
                      <p className="text-3xl font-bold text-orange-500">
                        {calculateSystemSize()} kW
                      </p>
                    </Card>
                    
                    <Card className="p-6 bg-green-50 border border-green-100">
                      <h4 className="font-medium text-gray-700 mb-2">
                        {t('manualCalculator.results.monthlySavings')}
                      </h4>
                      <p className="text-3xl font-bold text-green-500">
                        ₹{calculateSavings().monthly.toLocaleString()}
                      </p>
                    </Card>
                    
                    <Card className="p-6 bg-blue-50 border border-blue-100">
                      <h4 className="font-medium text-gray-700 mb-2">
                        {t('manualCalculator.results.annualSavings')}
                      </h4>
                      <p className="text-3xl font-bold text-blue-500">
                        ₹{calculateSavings().annual.toLocaleString()}
                      </p>
                    </Card>
                    
                    <Card className="p-6 bg-emerald-50 border border-emerald-100">
                      <h4 className="font-medium text-gray-700 mb-2">
                        {t('manualCalculator.results.carbonReduction')}
                      </h4>
                      <p className="text-3xl font-bold text-emerald-500">
                        {calculateCarbonReduction().toLocaleString()} kg CO₂/year
                      </p>
                    </Card>
                  </div>
                  
                  <div className="mt-8 p-6 border border-gray-200 rounded-lg bg-gray-50">
                    <h4 className="text-lg font-semibold mb-4 text-gray-800">
                      Next Steps
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Based on your appliance usage, we recommend a {calculateSystemSize()} kW solar system. Our experts will prepare a detailed PDF quote with exact specifications and costs. We'll email this quote to {formData.email} within 24 hours.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button 
                        variant="outline" 
                        leftIcon={<Download size={16} />}
                        onClick={() => window.alert("In a real implementation, this would generate a preliminary PDF.")}
                      >
                        Save Calculation
                      </Button>
                      <a 
                        href={`https://wa.me/919309865542?text=I've%20calculated%20my%20solar%20needs%20and%20need%20a%20${calculateSystemSize()}%20kW%20system.%20Please%20send%20me%20a%20detailed%20quote.`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full transition-colors shadow-md text-sm"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Get Quote on WhatsApp
                      </a>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex justify-center">
                    <Button variant="outline" onClick={() => setShowResults(false)}>
                      Back to Calculator
                    </Button>
                  </div>
                </div>
              )}
            </form>
          </Card>
        </div>
      </Section>

      {/* Common Appliance Reference */}
      <Section background="light" spacing="lg">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
            Common Appliance Wattage Reference
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card className="p-4">
              <h3 className="font-semibold mb-2 text-gray-800">Lighting</h3>
              <ul className="space-y-1 text-gray-600">
                <li className="flex justify-between">
                  <span>LED Bulb</span>
                  <span className="font-medium">7-10W</span>
                </li>
                <li className="flex justify-between">
                  <span>CFL Bulb</span>
                  <span className="font-medium">15-25W</span>
                </li>
                <li className="flex justify-between">
                  <span>Tube Light</span>
                  <span className="font-medium">36-40W</span>
                </li>
              </ul>
            </Card>
            
            <Card className="p-4">
              <h3 className="font-semibold mb-2 text-gray-800">Kitchen</h3>
              <ul className="space-y-1 text-gray-600">
                <li className="flex justify-between">
                  <span>Refrigerator</span>
                  <span className="font-medium">100-200W</span>
                </li>
                <li className="flex justify-between">
                  <span>Microwave</span>
                  <span className="font-medium">700-1200W</span>
                </li>
                <li className="flex justify-between">
                  <span>Mixer Grinder</span>
                  <span className="font-medium">500-750W</span>
                </li>
              </ul>
            </Card>
            
            <Card className="p-4">
              <h3 className="font-semibold mb-2 text-gray-800">Cooling</h3>
              <ul className="space-y-1 text-gray-600">
                <li className="flex justify-between">
                  <span>Ceiling Fan</span>
                  <span className="font-medium">70-80W</span>
                </li>
                <li className="flex justify-between">
                  <span>Table Fan</span>
                  <span className="font-medium">50-60W</span>
                </li>
                <li className="flex justify-between">
                  <span>Air Cooler</span>
                  <span className="font-medium">170-230W</span>
                </li>
              </ul>
            </Card>
            
            <Card className="p-4">
              <h3 className="font-semibold mb-2 text-gray-800">Entertainment</h3>
              <ul className="space-y-1 text-gray-600">
                <li className="flex justify-between">
                  <span>LED TV (32")</span>
                  <span className="font-medium">50-80W</span>
                </li>
                <li className="flex justify-between">
                  <span>LED TV (43")</span>
                  <span className="font-medium">100-120W</span>
                </li>
                <li className="flex justify-between">
                  <span>Set-top Box</span>
                  <span className="font-medium">10-30W</span>
                </li>
              </ul>
            </Card>
            
            <Card className="p-4">
              <h3 className="font-semibold mb-2 text-gray-800">Office</h3>
              <ul className="space-y-1 text-gray-600">
                <li className="flex justify-between">
                  <span>Laptop</span>
                  <span className="font-medium">50-100W</span>
                </li>
                <li className="flex justify-between">
                  <span>Desktop Computer</span>
                  <span className="font-medium">150-300W</span>
                </li>
                <li className="flex justify-between">
                  <span>Wi-Fi Router</span>
                  <span className="font-medium">5-10W</span>
                </li>
              </ul>
            </Card>
            
            <Card className="p-4">
              <h3 className="font-semibold mb-2 text-gray-800">High Power</h3>
              <ul className="space-y-1 text-gray-600">
                <li className="flex justify-between">
                  <span>Air Conditioner (1 ton)</span>
                  <span className="font-medium">1000-1200W</span>
                </li>
                <li className="flex justify-between">
                  <span>Water Heater</span>
                  <span className="font-medium">1500-3000W</span>
                </li>
                <li className="flex justify-between">
                  <span>Water Pump (1HP)</span>
                  <span className="font-medium">750W</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  );
}