export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-amber-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-100/20 rounded-full blur-2xl animate-bounce"></div>
      </div>

      {/* Geometric Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}>
      </div>
      
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="max-w-6xl mx-auto text-center">
          
          {/* Logo Section */}
          <div className="mb-12">
            <div className="mb-8 flex justify-center">
              <div className="relative group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-white to-amber-50 p-6 rounded-full border border-amber-300/40 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-16 h-16 text-amber-600 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 6L13 7H9V9H11L12 18L13 9H15L21 9ZM7.5 7C8.3 7 9 7.7 9 8.5S8.3 10 7.5 10 6 9.3 6 8.5 6.7 7 7.5 7ZM16.5 7C17.3 7 18 7.7 18 8.5S17.3 10 16.5 10 15 9.3 15 8.5 15.7 7 16.5 7ZM7.5 11C9.4 11 11 12.6 11 14.5V16H4V14.5C4 12.6 5.6 11 7.5 11ZM16.5 11C18.4 11 20 12.6 20 14.5V16H13V14.5C13 12.6 14.6 11 16.5 11Z"/>
                  </svg>
                </div>
                <div className="absolute inset-0 rounded-full border-2 border-amber-400/30 scale-125 animate-ping"></div>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-slate-600 to-amber-600 mb-6 tracking-tight">
              Yılmaz Çolak
            </h1>
            <div className="text-3xl md:text-5xl font-light text-amber-700 mb-8">
              Hukuk Bürosu
            </div>
            
            <p className="text-xl md:text-2xl text-slate-600 font-light max-w-2xl mx-auto leading-relaxed">
              Adalet ve Güvenin Adresi
            </p>
          </div>

          {/* Main Content Card */}
          <div className="mb-12">
            <div className="bg-white/80 backdrop-blur-xl border border-amber-200/50 rounded-3xl p-8 md:p-16 shadow-2xl hover:bg-white/90 transition-all duration-700 group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-100/30 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-700"></div>
              
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8 group-hover:text-amber-800 transition-colors duration-500">
                  Yakında Hizmetinizde
                </h2>
                
                <p className="text-lg md:text-xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto">
                  Hukuki danışmanlık alanında uzman ekibimizle, size en kaliteli hizmet sunmak için titizlikle çalışıyoruz. Modern yaklaşımımız ve deneyimimizle yanınızdayız.
                </p>

                {/* Service Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  <div className="group cursor-pointer">
                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-amber-200/30 hover:border-amber-300/60 transition-all duration-500 hover:scale-105 hover:bg-amber-50/50 shadow-lg hover:shadow-xl">
                      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">⚖️</div>
                      <h3 className="text-slate-800 font-bold text-xl mb-3 group-hover:text-amber-800 transition-colors">Hukuki Danışmanlık</h3>
                      <p className="text-slate-600 text-sm leading-relaxed group-hover:text-slate-700 transition-colors">Tüm hukuki konularda profesyonel danışmanlık hizmetleri</p>
                    </div>
                  </div>
                  
                  <div className="group cursor-pointer">
                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-amber-200/30 hover:border-amber-300/60 transition-all duration-500 hover:scale-105 hover:bg-amber-50/50 shadow-lg hover:shadow-xl">
                      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📋</div>
                      <h3 className="text-slate-800 font-bold text-xl mb-3 group-hover:text-amber-800 transition-colors">Sözleşme Hazırlama</h3>
                      <p className="text-slate-600 text-sm leading-relaxed group-hover:text-slate-700 transition-colors">Detaylı ve hukuki açıdan güvenli sözleşme düzenleme</p>
                    </div>
                  </div>
                  
                  <div className="group cursor-pointer">
                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-amber-200/30 hover:border-amber-300/60 transition-all duration-500 hover:scale-105 hover:bg-amber-50/50 shadow-lg hover:shadow-xl">
                      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🏛️</div>
                      <h3 className="text-slate-800 font-bold text-xl mb-3 group-hover:text-amber-800 transition-colors">Mahkeme Temsili</h3>
                      <p className="text-slate-600 text-sm leading-relaxed group-hover:text-slate-700 transition-colors">Tüm mahkeme süreçlerinde uzman temsil</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mb-12">
            <p className="text-slate-600 mb-8 text-lg">
              Acil durumlar ve bilgi için bizimle iletişime geçin
            </p>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              <a href="mailto:info@yilmazcolakhukuk.com" 
                 className="group flex items-center bg-amber-100/60 backdrop-blur-sm border border-amber-300/40 rounded-full px-8 py-4 text-amber-800 hover:bg-amber-200/60 hover:border-amber-400/60 hover:text-amber-900 transition-all duration-300 hover:scale-105 shadow-lg">
                <svg className="w-6 h-6 mr-3 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                info@yilmazcolakhukuk.com
              </a>
              
              <a href="tel:+905556767878" className="group flex items-center bg-slate-100/70 backdrop-blur-sm border border-slate-300 rounded-full px-8 py-4 text-slate-700 hover:bg-slate-200/70 hover:border-slate-400 hover:text-slate-900 hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg">
                <svg className="w-6 h-6 mr-3 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                +90 (555) 676 78 78
                <svg className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Website Badge */}
          <div className="mb-12">
            <a href="https://yilmazcolakhukuk.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-gradient-to-r from-amber-200/50 to-yellow-200/50 backdrop-blur-sm border border-amber-300/50 rounded-full px-8 py-4 hover:from-amber-300/60 hover:to-yellow-300/60 hover:scale-105 transition-all duration-300 cursor-pointer group shadow-lg">
              <svg className="w-6 h-6 text-amber-700 mr-3 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.559-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.559.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd"/>
              </svg>
              <span className="text-amber-700 font-semibold text-lg group-hover:text-amber-800 transition-colors">www.yilmazcolakhukuk.com</span>
              <svg className="w-4 h-4 text-amber-700 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
              </svg>
            </a>
          </div>

          {/* Footer */}
          <div className="text-center">
            <p className="text-slate-500 text-sm mb-6">
              Web tasarım ve geliştirme: <span className="text-amber-700 font-medium hover:text-amber-800 transition-colors cursor-pointer">Arda Çalışkan</span>
            </p>
            
            {/* Loading Animation */}
            <div className="flex justify-center">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full animate-bounce"></div>
                <div className="w-3 h-3 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full animate-bounce delay-150"></div>
                <div className="w-3 h-3 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full animate-bounce delay-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}