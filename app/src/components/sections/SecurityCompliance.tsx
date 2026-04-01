import { Card, CardContent } from '@/components/ui/card'
import { Shield, Lock, FileCheck, Eye, Database, Award } from 'lucide-react'

const securityFeatures = [
  {
    icon: Shield,
    title: '等保三级认证',
    description: '已通过国家信息安全等级保护三级认证，满足金融行业最高安全标准。',
  },
  {
    icon: Lock,
    title: '数据加密传输',
    description: '全程 TLS 1.3 加密传输，静态数据 AES-256 加密，确保数据安全。',
  },
  {
    icon: FileCheck,
    title: 'ISO 27001',
    description: '符合 ISO 27001 信息安全管理体系标准，规范化安全管理流程。',
  },
  {
    icon: Eye,
    title: '全程可审计',
    description: '完整日志记录，敏感操作审计，支持溯源查询，满足合规要求。',
  },
  {
    icon: Database,
    title: '私有化部署',
    description: '支持私有化部署，数据不出企业内网，满足数据本地化要求。',
  },
  {
    icon: Award,
    title: 'SOC 2 Type II',
    description: '已通过 SOC 2 Type II 认证，保障服务可用性与安全性。',
  },
]

export default function SecurityCompliance() {
  return (
    <section id="security" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
            安全合规
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            企业级安全与合规保障
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            荣获多项国际安全认证，为企业数据安全保驾护航
          </p>
        </div>

        {/* Security Badges */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {[
            { name: '等保三级', color: 'bg-blue-100 text-blue-700' },
            { name: 'ISO 27001', color: 'bg-green-100 text-green-700' },
            { name: 'SOC 2', color: 'bg-purple-100 text-purple-700' },
            { name: 'GDPR', color: 'bg-orange-100 text-orange-700' },
            { name: 'CCRC', color: 'bg-pink-100 text-pink-700' },
          ].map((badge, index) => (
            <div key={index} className={`px-6 py-3 ${badge.color} rounded-full font-semibold`}>
              {badge.name}
            </div>
          ))}
        </div>

        {/* Security Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {securityFeatures.map((feature, index) => (
            <Card key={index} className="border border-gray-200 hover:border-green-300 transition-colors">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">安全是我们不变的承诺</h3>
              <p className="text-gray-400 mb-6">
                数惠助手始终将安全放在首位，通过多层次的安全防护体系，确保您的数据安全无忧。
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  7×24 小时安全监控
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  专业安全团队响应
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  定期安全漏洞扫描
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="inline-block bg-white/10 rounded-2xl p-8">
                <div className="text-5xl font-bold text-white mb-2">99.99%</div>
                <div className="text-gray-400">服务可用性</div>
                <div className="text-sm text-gray-500 mt-2">全年服务稳定运行</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
