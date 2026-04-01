import { Button } from '@/components/ui/button'
import { ArrowRight, Play } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></span>
              企业级 AI 助手解决方案
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              数惠助手
              <br />
              <span className="text-blue-600">智能服务新体验</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              为银行、证券、美团等头部企业打造的下一代 AI 助手平台。
              深度融合行业场景，助力企业数字化转型，提升服务效率与用户体验。
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                免费试用
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="px-8">
                <Play className="mr-2 w-5 h-5" />
                观看演示
              </Button>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-gray-900">200+</div>
                <div className="text-gray-500 text-sm">服务企业</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">99.9%</div>
                <div className="text-gray-500 text-sm">服务可用性</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">10M+</div>
                <div className="text-gray-500 text-sm">日均调用</div>
              </div>
            </div>
          </div>

          {/* Right - Hero Image/Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl p-8 relative overflow-hidden">
              {/* Abstract AI Visual */}
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold">数</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">数惠助手</div>
                    <div className="text-sm text-green-600">● 在线</div>
                  </div>
                </div>
                
                {/* Chat Interface Mock */}
                <div className="space-y-4">
                  <div className="bg-gray-100 rounded-2xl rounded-tl-sm p-4 max-w-xs">
                    <p className="text-gray-700 text-sm">
                      您好，请问有什么可以帮助您的？
                    </p>
                  </div>
                  <div className="bg-blue-600 rounded-2xl rounded-tr-sm p-4 max-w-xs ml-auto">
                    <p className="text-white text-sm">
                      我想了解贵公司的AI助手解决方案
                    </p>
                  </div>
                  <div className="bg-gray-100 rounded-2xl rounded-tl-sm p-4 max-w-xs">
                    <p className="text-gray-700 text-sm">
                      数惠助手专注于为企业提供智能对话、智能分析、智能决策等核心能力...
                    </p>
                  </div>
                </div>

                {/* Input Field Mock */}
                <div className="mt-6 flex items-center space-x-3 bg-gray-100 rounded-xl p-3">
                  <div className="flex-1 text-gray-400 text-sm">输入您的问题...</div>
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-50 blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-300 rounded-full opacity-30 blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
