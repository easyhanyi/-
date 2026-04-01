import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Building2, TrendingUp, ShoppingCart, ArrowRight } from 'lucide-react'

const solutions = [
  {
    icon: Building2,
    industry: '银行金融',
    title: '智慧银行解决方案',
    description: '为银行客户提供全渠道智能服务，覆盖咨询、办理、售后全流程，提升服务效率与客户满意度。',
    highlights: ['智能柜员替代率 80%', '客户满意度提升 40%', '服务响应时间缩短 70%'],
    color: 'from-blue-600 to-blue-700',
  },
  {
    icon: TrendingUp,
    industry: '证券投资',
    title: '智能投顾解决方案',
    description: '基于大数据与 AI 算法的智能投顾系统，为券商提供个性化投资建议与风险管理服务。',
    highlights: ['投资建议准确率 95%', '用户留存率提升 60%', '合规审核自动化'],
    color: 'from-green-600 to-green-700',
  },
  {
    icon: ShoppingCart,
    industry: '零售餐饮',
    title: '新零售解决方案',
    description: '为美团等平台及零售品牌打造智能客服与营销助手，实现精准营销与高效服务。',
    highlights: ['订单处理效率 3x', '营销转化率提升 50%', '7×24 不间断服务'],
    color: 'from-orange-500 to-orange-600',
  },
]

export default function Solutions() {
  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            解决方案
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            行业深度定制方案
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            深入理解行业痛点，提供场景化解决方案，助力企业智能化升级
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <CardContent className="p-0">
                {/* Header with Gradient */}
                <div className={`bg-gradient-to-r ${solution.color} p-8 text-white`}>
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                    <solution.icon className="w-8 h-8" />
                  </div>
                  <div className="text-sm text-white/80 mb-2">{solution.industry}</div>
                  <h3 className="text-2xl font-bold">{solution.title}</h3>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  
                  {/* Highlights */}
                  <div className="space-y-3 mb-6">
                    {solution.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <Button variant="outline" className="w-full group-hover:bg-gray-900 group-hover:text-white transition-colors">
                    了解更多
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">获取专属行业解决方案</h3>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            我们的专家团队将根据您的业务需求，量身定制最合适的 AI 助手解决方案
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8">
            立即咨询
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
