export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Logo/Scale of Justice Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <svg className="w-24 h-24 text-amber-400 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 6L13 7H9V9H11L12 18L13 9H15L21 9ZM7.5 7C8.3 7 9 7.7 9 8.5S8.3 10 7.5 10 6 9.3 6 8.5 6.7 7 7.5 7ZM16.5 7C17.3 7 18 7.7 18 8.5S17.3 10 16.5 10 15 9.3 15 8.5 15.7 7 16.5 7ZM7.5 11C9.4 11 11 12.6 11 14.5V16H4V14.5C4 12.6 5.6 11 7.5 11ZM16.5 11C18.4 11 20 12.6 20 14.5V16H13V14.5C13 12.6 14.6 11 16.5 11Z"/>
            </svg>
            {/* Animated ring */}
            <div className="absolute inset-0 rounded-full border-2 border-amber-400/30 animate-pulse scale-150"></div>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-serif text-white mb-4 tracking-tight">
          Yılmaz Çolak
          <span className="block text-3xl md:text-4xl text-amber-400 font-normal mt-2">
            Hukuk Bürosu
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-slate-300 mb-8 font-light">
          Adalet ve Güvenin Adresi
        </p>

        {/* Coming Soon Message */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-12 mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
            Yakında Hizmetinizde
          </h2>
          <p className="text-lg md:text-xl text-slate-200 mb-6 leading-relaxed">
            Profesyonel hukuki danışmanlık hizmetlerimiz ile size en iyi çözümleri sunmak için hazırlıklarımızı sürdürüyoruz.
          </p>
          
          {/* Services Preview */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white/5 rounded-lg p-4">
              <div className="text-amber-400 mb-2">⚖️</div>
              <h3 className="text-white font-semibold mb-1">Hukuki Danışmanlık</h3>
              <p className="text-slate-300 text-sm">Tüm hukuki konularda uzman danışmanlık</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <div className="text-amber-400 mb-2">📋</div>
              <h3 className="text-white font-semibold mb-1">Sözleşme Hazırlama</h3>
              <p className="text-slate-300 text-sm">Profesyonel sözleşme düzenleme</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <div className="text-amber-400 mb-2">🏛️</div>
              <h3 className="text-white font-semibold mb-1">Mahkeme Temsili</h3>
              <p className="text-slate-300 text-sm">Tüm mahkemelerde temsil</p>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-center mb-8">
          <p className="text-slate-300 mb-4">
            Acil durumlar için bize ulaşın:
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
            <a href="mailto:info@yilmazcolakhukuk.com" 
               className="flex items-center text-amber-400 hover:text-amber-300 transition-colors">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              info@yilmazcolakhukuk.com
            </a>
            <div className="flex items-center text-slate-300">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              +90 (XXX) XXX XX XX
            </div>
          </div>
        </div>

        {/* Website URL */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-amber-400/10 border border-amber-400/30 rounded-full px-6 py-3">
            <svg className="w-5 h-5 text-amber-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.559-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.559.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd"/>
            </svg>
            <span className="text-amber-400 font-semibold">www.yilmazcolakhukuk.com</span>
          </div>
        </div>

        {/* Developer Credit */}
        <div className="text-center">
          <p className="text-slate-400 text-sm">
            Web tasarım: <span className="text-amber-400">Arda Çalışkan</span>
          </p>
        </div>

        {/* Loading Animation */}
        <div className="mt-12 flex justify-center">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}