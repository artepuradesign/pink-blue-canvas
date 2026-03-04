
import React from 'react';
import { Link } from 'react-router-dom';
import { Package, Mail, Clock, Shield, Award, Facebook, Twitter, Instagram, Linkedin, ArrowUpRight, Zap, Globe, Lock } from 'lucide-react';
import footerBg from '@/assets/footer-bg.png';

const FuturisticFooter = () => {
  return (
    <footer className="relative w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={footerBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>

      {/* Neon line top border */}
      <div className="relative z-10">
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent shadow-[0_0_20px_rgba(217,70,239,0.6)]" />
        
        <div className="max-w-7xl mx-auto px-6 py-16">
          {/* Top section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center mb-5 group">
                <Package className="text-fuchsia-400 mr-2 group-hover:text-cyan-400 transition-colors duration-500" size={28} />
                <span className="text-xl font-bold text-fuchsia-400 group-hover:text-cyan-400 transition-colors duration-500">API</span>
                <span className="text-xl font-bold text-white">Painel</span>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Plataforma completa para consulta de CPF e CNPJ com APIs integradas. Tecnologia de ponta e segurança máxima.
              </p>
              <div className="flex gap-3">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="group/icon flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 bg-white/5 hover:bg-fuchsia-500/20 hover:border-fuchsia-500/50 hover:shadow-[0_0_15px_rgba(217,70,239,0.3)] transition-all duration-300">
                    <Icon size={16} className="text-gray-400 group-hover/icon:text-fuchsia-400 transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
                Links Rápidos
              </h3>
              <ul className="space-y-3">
                {[
                  { label: 'Documentação', to: '/docs' },
                  { label: 'Planos', to: '/pricing' },
                  { label: 'API', to: '/api' },
                  { label: 'Suporte', to: '/dashboard/suporte' },
                ].map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="group flex items-center text-gray-400 hover:text-cyan-400 transition-all duration-300 text-sm">
                      <ArrowUpRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contato */}
            <div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-fuchsia-400 shadow-[0_0_8px_rgba(217,70,239,0.6)]" />
                Contato
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-fuchsia-500/10 border border-fuchsia-500/20">
                    <Mail size={14} className="text-fuchsia-400" />
                  </div>
                  <div>
                    <span className="text-gray-500 text-xs">Email</span>
                    <p className="text-gray-300 text-sm">contato@apipainel.com.br</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                    <Clock size={14} className="text-cyan-400" />
                  </div>
                  <div>
                    <span className="text-gray-500 text-xs">Suporte</span>
                    <p className="text-gray-300 text-sm">24h/7 dias</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Recursos */}
            <div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
                Recursos
              </h3>
              <div className="space-y-3">
                {[
                  { icon: Shield, label: '100% Seguro', desc: 'Criptografia SSL', color: 'emerald' },
                  { icon: Award, label: 'Certificado', desc: 'Conformidade LGPD', color: 'fuchsia' },
                  { icon: Zap, label: 'Alta Performance', desc: '99.9% uptime', color: 'cyan' },
                ].map((item, i) => (
                  <div key={i} className="group flex items-center gap-3 p-3 rounded-xl border border-white/5 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/10 transition-all duration-300">
                    <div className={`flex items-center justify-center w-8 h-8 rounded-lg bg-${item.color}-500/10`}>
                      <item.icon size={14} className={`text-${item.color}-400`} />
                    </div>
                    <div>
                      <span className="text-white text-sm font-medium">{item.label}</span>
                      <p className="text-gray-500 text-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div className="flex flex-wrap justify-center gap-8 mb-12 py-6 border-t border-b border-white/5">
            {[
              { value: '+50.000', label: 'Consultas/dia' },
              { value: '99.9%', label: 'Uptime' },
              { value: '24/7', label: 'Suporte' },
              { value: '+1.000', label: 'Empresas' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-xl font-bold bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-gray-500 text-xs mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Bottom */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-xs">
              © {new Date().getFullYear()} APIPainel. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="text-gray-500 hover:text-gray-300 text-xs transition-colors">Privacidade</Link>
              <Link to="/terms" className="text-gray-500 hover:text-gray-300 text-xs transition-colors">Termos</Link>
              <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                <Lock size={10} />
                SSL Secured
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FuturisticFooter;
