import { Card, CardContent } from '@/components/ui/card'
import { Brain, MessageSquare, BarChart3, Shield, Zap, Globe } from 'lucide-react'

const capabilities = [
  {
    icon: Brain,
    title: '智能对话引擎',
    description: '基于大语言模型的自然语言交互，支持多轮对话、意图识别、情感分析，提供拟人化服务体验。',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: MessageSquare,
    title: '全渠道接入',
    description: '一键对接 App、Web、微信、企微、电话等全渠道，实现统一知识库和一致性服务体验。',
    color: 'bg-green-100 text-green-600',
  },
  {
    icon: BarChart3,
    title: '智能数据分析',
    description: '实时挖掘用户需求与行为数据，提供可视化报表与洞察，辅助企业精准决策。',
    color: 'bg-purple-100 text-purple-600',
  },
  {
    icon: Shield,
    title: '企业级安全',
    description: '私有化部署、数据加密、权限管控、等保合规，全方位保障企业数据安全。',
    color: 'bg-orange-100 text-orange-600',
  },
  {
    icon: Zap,
    title: '秒级响应',
    description: '自研高性能推理引擎，平均响应时间 < 200ms，保证流畅的用户交互体验。',
    color: 'bg-yellow-100 text-yellow-600',
  },
  {
    icon: Globe,
    title: '行业定制化',
    description: '深耕金融、零售、餐饮等行业，提供专属行业模型与业务场景解决方案。',
    color: 'bg-pink-100 text-pink-600',
  },
]

export default function CoreCapabilities() {
  return (
    <section id="capabilities" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            核心能力
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            为什么选择数惠助手
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            六大核心能力，构筑企业智能服务新基建
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((item, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
