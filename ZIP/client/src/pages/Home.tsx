/* Design Philosophy: Cyberpunk Industrial
 * - Dark backgrounds with neon red/cyan accents
 * - Diagonal cuts and asymmetric layouts
 * - Hexagonal patterns and circuit-like elements
 * - High contrast typography with Orbitron display font
 * - Hover effects with neon glow and lift
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Mensagem pré-definida para WhatsApp
  const whatsappMessage = encodeURIComponent("Vim do site de vocês, gostaria de mais informações");
  const whatsappNumber = "5551983591567";
  const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${whatsappMessage}`;
  const whatsappPhone = "555136636445";
  const whatsappLinkPhone = `https://api.whatsapp.com/send?phone=${whatsappPhone}&text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-background/95 backdrop-blur-sm border-b border-primary/30">
        <div className="container mx-auto py-4 flex justify-between items-center">
          <h1 className="font-display text-2xl md:text-3xl font-black tracking-tighter">
            MYRANDA <span className="text-primary neon-glow-red">INFORMÁTICA</span>
          </h1>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-6 py-2 rounded-sm transition-all hover:shadow-lg hover:shadow-primary/50">
              FALAR COM TÉCNICO
            </Button>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-tech-background.png" 
            alt="Technology Background" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/30"></div>
          <div className="absolute inset-0 hexagon-pattern"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className={`max-w-3xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl mb-6 text-shadow-strong leading-tight uppercase">
              TECNOLOGIA <br />
              <span className="text-primary neon-glow-red">DE ELITE.</span>
            </h2>
            <p className="text-foreground/90 text-lg md:text-2xl mb-10 text-shadow-strong max-w-2xl font-medium">
              Assistência técnica especializada, loja completa de acessórios e soluções em infraestrutura para seu setup gamer ou negócio em Osório/RS.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#25d366] hover:bg-[#20bd5a] text-white px-10 py-7 text-xl font-black rounded-sm transition-all hover:scale-105 hover:shadow-2xl hover:shadow-[#25d366]/30 flex items-center gap-3">
                  <i className="fab fa-whatsapp text-3xl"></i>
                  SOLICITAR ORÇAMENTO
                </Button>
              </a>
              <a href="#servicos">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-10 py-7 text-xl font-black rounded-sm transition-all hover:scale-105">
                  NOSSOS SERVIÇOS
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <i className="fas fa-chevron-down text-primary text-2xl"></i>
        </div>
      </section>

      {/* Services Grid */}
      <section id="servicos" className="py-32 bg-card/50 relative diagonal-cut-top">
        <div className="absolute inset-0 hexagon-pattern"></div>
        <div className="container mx-auto relative z-10">
          <h2 className="font-display text-4xl md:text-6xl text-center mb-6 uppercase">
            NOSSOS <span className="text-primary neon-glow-red">SERVIÇOS</span>
          </h2>
          <p className="text-center text-foreground text-lg mb-16 max-w-2xl mx-auto">
            Soluções completas em tecnologia para usuários domésticos, gamers e empresas
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Loja de Acessórios */}
            <Card className="card-cyberpunk p-8 rounded-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl group-hover:bg-primary/20 transition-all"></div>
              <i className="fas fa-store text-5xl text-primary mb-6 relative z-10"></i>
              <h3 className="font-display text-2xl font-bold mb-4 relative z-10">LOJA DE ACESSÓRIOS</h3>
              <p className="text-foreground relative z-10 leading-relaxed">
                Amplo catálogo de periféricos, cabos, adaptadores e componentes para seu computador. Tudo que você precisa em um só lugar.
              </p>
            </Card>

            {/* PCs Gamers */}
            <Card className="card-cyberpunk p-8 rounded-sm relative overflow-hidden group bg-primary/5">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl group-hover:bg-primary/20 transition-all"></div>
              <i className="fas fa-gamepad text-5xl text-primary mb-6 relative z-10"></i>
              <h3 className="font-display text-2xl font-bold mb-4 relative z-10">PCs GAMERS</h3>
              <p className="text-foreground/80 relative z-10 leading-relaxed">
                Montagem personalizada de alto desempenho, otimização para streamers e upgrades de hardware para máxima performance.
              </p>
            </Card>

            {/* Computadores Domésticos */}
            <Card className="card-cyberpunk p-8 rounded-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-3xl group-hover:bg-accent/20 transition-all"></div>
              <i className="fas fa-desktop text-5xl text-accent mb-6 relative z-10"></i>
              <h3 className="font-display text-2xl font-bold mb-4 relative z-10">USO DOMÉSTICO</h3>
              <p className="text-foreground relative z-10 leading-relaxed">
                Computadores para trabalho, estudos e entretenimento familiar. Configurações balanceadas com excelente custo-benefício.
              </p>
            </Card>

            {/* Servidores */}
            <Card className="card-cyberpunk p-8 rounded-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-3xl group-hover:bg-accent/20 transition-all"></div>
              <i className="fas fa-server text-5xl text-accent mb-6 relative z-10"></i>
              <h3 className="font-display text-2xl font-bold mb-4 relative z-10">SERVIDORES</h3>
              <p className="text-foreground relative z-10 leading-relaxed">
                Infraestrutura robusta para empresas. Instalação, configuração e manutenção de servidores físicos e virtuais.
              </p>
            </Card>

            {/* Redes */}
            <Card className="card-cyberpunk p-8 rounded-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl group-hover:bg-primary/20 transition-all"></div>
              <i className="fas fa-network-wired text-5xl text-primary mb-6 relative z-10"></i>
              <h3 className="font-display text-2xl font-bold mb-4 relative z-10">REDES</h3>
              <p className="text-foreground relative z-10 leading-relaxed">
                Instalação de redes Wi-Fi e cabeadas, configuração de roteadores, switches e pontos de acesso para cobertura total.
              </p>
            </Card>

            {/* Impressoras */}
            <Card className="card-cyberpunk p-8 rounded-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-3xl group-hover:bg-accent/20 transition-all"></div>
              <i className="fas fa-print text-5xl text-accent mb-6 relative z-10"></i>
              <h3 className="font-display text-2xl font-bold mb-4 relative z-10">IMPRESSORAS</h3>
              <p className="text-foreground relative z-10 leading-relaxed">
                Manutenção, recarga de cartuchos e configuração de impressoras. Suporte para modelos domésticos e corporativos.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Gaming Section */}
      <section className="py-32 bg-background relative">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-lg"></div>
              <img 
                src="/images/gaming-setup-neon.png" 
                alt="Gaming Setup" 
                className="relative rounded-sm shadow-2xl shadow-primary/30 border border-primary/30"
              />
            </div>
            <div>
              <h2 className="font-display text-4xl md:text-6xl mb-6 uppercase">
                PERFORMANCE <span className="text-primary neon-glow-red">EXTREMA</span>
              </h2>
              <p className="text-foreground text-lg mb-8 leading-relaxed">
                Montamos PCs gamers de alta performance com componentes de última geração. Cada build é personalizada para atender suas necessidades específicas, seja para jogos competitivos, streaming ou criação de conteúdo.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-primary text-xl"></i>
                  <span className="font-mono text-sm">RTX 40 Series</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-primary text-xl"></i>
                  <span className="font-mono text-sm">Intel 14th Gen</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-primary text-xl"></i>
                  <span className="font-mono text-sm">DDR5 RAM</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-primary text-xl"></i>
                  <span className="font-mono text-sm">NVMe Gen4</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-primary text-xl"></i>
                  <span className="font-mono text-sm">RGB Sync</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-primary text-xl"></i>
                  <span className="font-mono text-sm">Water Cooling</span>
                </div>
              </div>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-black rounded-sm transition-all hover:shadow-lg hover:shadow-primary/50">
                  MONTAR MEU PC GAMER
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Store Section */}
      <section className="py-32 bg-card/30 relative diagonal-cut-top diagonal-cut-bottom">
        <div className="absolute inset-0 hexagon-pattern"></div>
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-display text-4xl md:text-6xl mb-6 uppercase">
                LOJA <span className="text-accent neon-glow-cyan">COMPLETA</span>
              </h2>
              <p className="text-foreground text-lg mb-8 leading-relaxed">
                Nossa loja física oferece uma ampla variedade de acessórios e periféricos para seu computador. Desde cabos e adaptadores até teclados mecânicos, mouses gamers e headsets de alta qualidade.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4 p-4 bg-background/50 rounded-sm border border-border">
                  <i className="fas fa-keyboard text-accent text-2xl mt-1"></i>
                  <div>
                    <h4 className="font-bold mb-1">Periféricos Gamers</h4>
                    <p className="text-sm text-foreground">Teclados mecânicos, mouses de alta precisão, headsets 7.1</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-background/50 rounded-sm border border-border">
                  <i className="fas fa-microchip text-accent text-2xl mt-1"></i>
                  <div>
                    <h4 className="font-bold mb-1">Componentes</h4>
                    <p className="text-sm text-foreground">Memórias RAM, SSDs, fontes, coolers e gabinetes</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-background/50 rounded-sm border border-border">
                  <i className="fas fa-plug text-accent text-2xl mt-1"></i>
                  <div>
                    <h4 className="font-bold mb-1">Cabos & Adaptadores</h4>
                    <p className="text-sm text-foreground">HDMI, DisplayPort, USB-C, adaptadores de rede e mais</p>
                  </div>
                </div>
              </div>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-6 text-lg font-black rounded-sm transition-all">
                  VISITAR LOJA
                </Button>
              </a>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="absolute -inset-4 bg-accent/20 blur-3xl rounded-lg"></div>
              <img 
                src="/images/tech-store-modern.png" 
                alt="Tech Store" 
                className="relative rounded-sm shadow-2xl shadow-accent/30 border border-accent/30"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technical Support Section */}
      <section className="py-32 bg-background relative">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-card/50 rounded-sm border border-border overflow-hidden">
            <div className="relative h-80 lg:h-[600px]">
              <img 
                src="/images/technician-workspace.png" 
                alt="Technical Support" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 lg:p-16">
              <h2 className="font-display text-3xl md:text-5xl mb-6 uppercase">
                ATENDIMENTO <span className="text-primary neon-glow-red">TÉCNICO</span>
              </h2>
              <p className="text-foreground text-lg mb-8 leading-relaxed">
                Oferecemos atendimento técnico especializado no local, seja em sua residência ou empresa. Garantimos que seus equipamentos funcionem perfeitamente, minimizando o tempo de inatividade.
              </p>
              <div className="grid grid-cols-2 gap-4 font-bold mb-8">
                <div className="flex items-center gap-3">
                  <i className="fas fa-check text-primary text-xl"></i>
                  <span>Notebooks & PCs</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-check text-primary text-xl"></i>
                  <span>Redes Wi-Fi</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-check text-primary text-xl"></i>
                  <span>Servidores</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-check text-primary text-xl"></i>
                  <span>Backup</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-check text-primary text-xl"></i>
                  <span>Impressoras</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-check text-primary text-xl"></i>
                  <span>Redes Cabeadas</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={whatsappLinkPhone} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-black rounded-sm transition-all hover:shadow-lg hover:shadow-primary/50 w-full sm:w-auto">
                    AGENDAR VISITA TÉCNICA
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Section */}
      <section className="py-32 bg-card/30 relative diagonal-cut-top">
        <div className="absolute inset-0 hexagon-pattern"></div>
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/20 blur-3xl rounded-lg"></div>
              <img 
                src="/images/network-server-industrial.png" 
                alt="Business Infrastructure" 
                className="relative rounded-sm shadow-2xl shadow-accent/30 border border-accent/30"
              />
            </div>
            <div>
              <h2 className="font-display text-4xl md:text-6xl mb-6 uppercase">
                SUPORTE <span className="text-accent neon-glow-cyan">EMPRESARIAL</span>
              </h2>
              <p className="text-foreground text-lg mb-8 leading-relaxed">
                Mantenha sua empresa operando sem interrupções. Oferecemos contratos de manutenção preventiva, suporte técnico dedicado e soluções completas de infraestrutura de TI.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4 p-4 bg-background/50 rounded-sm border border-border">
                  <i className="fas fa-network-wired text-accent text-2xl mt-1"></i>
                  <div>
                    <h4 className="font-bold mb-1">Infraestrutura de Rede</h4>
                    <p className="text-sm text-foreground">Cabeamento estruturado, switches gerenciáveis, VLANs e segmentação</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-background/50 rounded-sm border border-border">
                  <i className="fas fa-shield-alt text-accent text-2xl mt-1"></i>
                  <div>
                    <h4 className="font-bold mb-1">Segurança & Backup</h4>
                    <p className="text-sm text-foreground">Firewalls, antivírus corporativo, backup automático e disaster recovery</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-background/50 rounded-sm border border-border">
                  <i className="fas fa-headset text-accent text-2xl mt-1"></i>
                  <div>
                    <h4 className="font-bold mb-1">Suporte Dedicado</h4>
                    <p className="text-sm text-muted-foreground">Atendimento prioritário, contratos mensais e SLA garantido</p>
                  </div>
                </div>
              </div>
              <a href={whatsappLinkPhone} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-6 text-lg font-black rounded-sm transition-all">
                  SOLICITAR PROPOSTA
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-primary/20 via-background to-accent/20 relative">
        <div className="absolute inset-0 hexagon-pattern"></div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="font-display text-4xl md:text-6xl mb-6 uppercase">
            PRONTO PARA <span className="text-primary neon-glow-red">COMEÇAR?</span>
          </h2>
          <p className="text-muted-foreground text-xl mb-12 max-w-2xl mx-auto">
            Entre em contato agora e descubra como podemos ajudar com suas necessidades em tecnologia
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button className="bg-[#25d366] hover:bg-[#20bd5a] text-white px-12 py-8 text-2xl font-black rounded-sm transition-all hover:scale-105 hover:shadow-2xl hover:shadow-[#25d366]/30 flex items-center gap-4 mx-auto">
              <i className="fab fa-whatsapp text-4xl"></i>
              FALAR NO WHATSAPP
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card border-t border-border text-center">
        <div className="container mx-auto">
          <h3 className="font-display text-2xl mb-4">
            MYRANDA<span className="text-primary">_</span>
          </h3>
          <p className="text-muted-foreground text-sm mb-2">Av. Getulio Vargas, 1144 - Osório/RS</p>
          <p className="text-muted-foreground text-sm mb-6">
            Fone: <a href="tel:+555136636445" className="hover:text-primary transition-colors">(51) 3663-6445</a> | 
            WhatsApp: <a href={whatsappLink} className="hover:text-primary transition-colors"> (51) 98359-1567</a>
          </p>
          <div className="flex justify-center gap-6 text-2xl">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#25d366] transition-colors">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <p className="text-muted-foreground text-xs mt-8">
            © {new Date().getFullYear()} Myranda Informática. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={whatsappLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25d366] w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-2xl z-50 hover:scale-110 transition-all hover:shadow-[#25d366]/50 animate-pulse-slow"
      >
        <i className="fab fa-whatsapp text-white"></i>
      </a>
    </div>
  );
}
