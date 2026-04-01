import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'

const cases = [
  {
    logo: '中国银行',
    industry: '银行',
    title: '智能客服系统全面升级',
    description: '为中国银行打造的智能客服系统，日均处理咨询量超过 50 万次，客户满意度提升至 96%。',
    metrics: [
      { label: '咨询处理量', value: '50万+' },
      { label: '客户满意度', value: '96%' },
      { label: '人工成本节省', value: '60%' },
    ],
  },
  {
    logo: '中信证券',
    industry: '证券',
    title: '智能投顾平台上线',
    description: '为中信证券打造的智能投顾平台，提供 7×24 小时投资咨询服务，用户转化率提升 45%。',
    metrics: [
      { label: '日活用户', value: '100万+' },
      { label: '转化率提升', value: '45%' },
      { label: '响应时间', value: '<200ms' },
    ],
  },
  {
    logo: '美团',
    industry: '零售',
    title: '外卖客服智能化改造',
    description: '为美团外卖打造的智能客服，日均处理订单相关咨询 200 万次，问题解决率达 92%。',
    metrics: [
      { label: '日均咨询量', value: '200万' },
      { label: '问题解决率', value: '92%' },
      { label: '成本降低', value: '55%' },
    ],
  },
]

export default function CustomerCases() {
  return (
    <section id="cases" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            客户案例
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            头部企业的一致选择
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            已成功服务 200+ 企业客户，覆盖银行、证券、零售等多个行业
          </p>
        </div>

        {/* Cases Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((caseItem, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <CardContent className="p-8">
                {/* Logo & Industry */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center">
                    <span className="text-lg font-bold text-gray-700">{caseItem.logo.charAt(0)}</span>
                  </div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    {caseItem.industry}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">{caseItem.title}</h3>
                <p className="text-gray-600 mb-6">{caseItem.description}</p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
                  {caseItem.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-xl font-bold text-blue-600">{metric.value}</div>
                      <div className="text-xs text-gray-500 mt-1">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* More Cases Link */}
        <div className="text-center mt-12">
          <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
            查看更多客户案例
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>

        {/* Client Logos */}
        <div className="mt-16">
          <p className="text-center text-gray-500 mb-8">服务超过 200 家企业客户，包括</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {['中国银行', '工商银行', '建设银行', '中信证券', '华泰证券', '美团', '京东', '拼多多'].map((brand, index) => (
              <div key={index} className="text-gray-400 font-semibold text-lg hover:text-gray-600 transition-colors">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
