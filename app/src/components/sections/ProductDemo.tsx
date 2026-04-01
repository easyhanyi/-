import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { MessageSquare, CreditCard, ShoppingBag, Headphones, ArrowRight } from 'lucide-react'

const demoScenarios = [
  {
    id: 'banking',
    icon: MessageSquare,
    title: '智能客服',
    subtitle: '银行场景',
    description: '7×24小时在线的智能客服，可处理账户查询、转账咨询、贷款办理等80%+常见业务咨询。',
    features: ['智能语义理解', '多轮对话导航', '业务无缝转接'],
  },
  {
    id: 'card',
    icon: CreditCard,
    title: '信用卡服务',
    subtitle: '银行场景',
    description: '智能信用卡助手，支持账单查询、分期办理、积分兑换、额度调整等全流程自助服务。',
    features: ['OCR识别', '智能推荐', '一键办理'],
  },
  {
    id: 'shopping',
    icon: ShoppingBag,
    title: '智能推荐',
    subtitle: '零售场景',
    description: '基于用户画像和行为分析的智能推荐系统，提升转化率与客单价，打造个性化购物体验。',
    features: ['精准画像', '实时推荐', '效果追踪'],
  },
  {
    id: 'support',
    icon: Headphones,
    title: '售后支持',
    subtitle: '全行业通用',
    description: '智能售后助手，自动处理退换货、投诉建议、工单跟踪等服务，提升客户满意度。',
    features: ['工单管理', '智能分拨', '满意度分析'],
  },
]

export default function ProductDemo() {
  const [activeTab, setActiveTab] = useState('banking')

  const currentDemo = demoScenarios.find(d => d.id === activeTab) || demoScenarios[0]

  return (
    <section id="demo" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            产品演示
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            场景化解决方案演示
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            点击下方场景，体验数惠助手在不同业务场景下的智能表现
          </p>
        </div>

        {/* Demo Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-white p-2 rounded-2xl shadow-lg">
              {demoScenarios.map((scenario) => (
                <TabsTrigger
                  key={scenario.id}
                  value={scenario.id}
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-xl px-6 py-3"
                >
                  <scenario.icon className="w-5 h-5 mr-2" />
                  <span className="hidden sm:inline">{scenario.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value={activeTab} className="mt-0">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left - Demo Interface */}
              <Card className="border-0 shadow-2xl overflow-hidden">
                <CardContent className="p-0">
                  {/* Demo Header */}
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                        <currentDemo.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-semibold">{currentDemo.title}</div>
                        <div className="text-sm text-blue-200">{currentDemo.subtitle}</div>
                      </div>
                    </div>
                  </div>

                  {/* Chat Demo */}
                  <div className="bg-gray-50 p-6 h-80 overflow-y-auto">
                    <div className="space-y-4">
                      <div className="flex justify-end">
                        <div className="bg-blue-600 text-white rounded-2xl rounded-tr-sm px-4 py-3 max-w-xs">
                          <p className="text-sm">我想查询一下我的账户余额</p>
                        </div>
                      </div>
                      <div className="flex justify-start">
                        <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 max-w-xs shadow-sm">
                          <p className="text-sm text-gray-700">好的，正在为您查询账户信息...</p>
                        </div>
                      </div>
                      <div className="flex justify-start">
                        <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 max-w-sm shadow-sm">
                          <p className="text-sm text-gray-700">
                            您当前账户余额为 <span className="font-bold text-blue-600">¥58,234.56</span>
                          </p>
                          <p className="text-sm text-gray-500 mt-1">上次更新：今日 14:32</p>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <div className="bg-blue-600 text-white rounded-2xl rounded-tr-sm px-4 py-3 max-w-xs">
                          <p className="text-sm">谢谢，还有什么服务？</p>
                        </div>
                      </div>
                      <div className="flex justify-start">
                        <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 max-w-xs shadow-sm">
                          <p className="text-sm text-gray-700">
                            您还可以办理转账、缴费、投资理财等服务，请问需要什么帮助？
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Input */}
                  <div className="p-4 bg-white border-t">
                    <div className="flex items-center space-x-3">
                      <input
                        type="text"
                        placeholder="输入您想咨询的问题..."
                        className="flex-1 px-4 py-3 bg-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <Button className="bg-blue-600 hover:bg-blue-700 px-6">
                        发送
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Right - Features */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">{currentDemo.description}</h3>
                
                <div className="grid grid-cols-1 gap-4">
                  {currentDemo.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm">
                      <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                        <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                      </div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg mt-8">
                  预约完整演示
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
