import Navigation from '@/components/sections/Navigation'
import Hero from '@/components/sections/Hero'
import CoreCapabilities from '@/components/sections/CoreCapabilities'
import ProductDemo from '@/components/sections/ProductDemo'
import Solutions from '@/components/sections/Solutions'
import CustomerCases from '@/components/sections/CustomerCases'
import SecurityCompliance from '@/components/sections/SecurityCompliance'
import Footer from '@/components/sections/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <CoreCapabilities />
      <ProductDemo />
      <Solutions />
      <CustomerCases />
      <SecurityCompliance />
      <Footer />
    </div>
  )
}

export default App
