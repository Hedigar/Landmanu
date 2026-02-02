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
  const address = "Av. Getúlio Vargas, 1144 - Centro, Osório - RS, 95520-000";
  const addressParam = encodeURIComponent(address);
  const mapsLink =
    "https://www.google.com/maps/place/Av.+Get%C3%BAlio+Vargas,+1144+-+Centro,+Os%C3%B3rio+-+RS,+95520-000/@-29.8904595,-50.2733893,17z/data=!3m1!4b1!4m6!3m5!1s0x9518660682780ceb:0xf8f3b119137eec35!8m2!3d-29.8904642!4d-50.2708144!16s%2Fg%2F11wb1vf97q?entry=ttu";
  const mapsEmbedUrl = `https://www.google.com/maps?q=${addressParam}&output=embed`;
  const directionsLink = `https://www.google.com/maps/dir/?api=1&destination=${addressParam}`;

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
            src="/images/hero-tech-background.webp" 
            alt="Technology Background" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/30"></div>
          <div className="absolute inset-0 hexagon-pattern"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className={`max-w-3xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl mb-6 text-shadow-strong leading-tight uppercase">
              Atendimento rápido para <br />
              <span className="text-primary neon-glow-red">casa e empresa.</span>
            </h2>
            <p className="text-foreground/90 text-lg md:text-2xl mb-10 text-shadow-strong max-w-2xl font-medium">
                            Computadores, notebooks, impressoras e redes - Atendemos Osório e região.
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
      <section id="servicos" className="py-32 bg-card/50 relative diagonal-cut-top scroll-mt-24 sm:scroll-mt-28">
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
              <h3 className="font-display text-2xl font-bold mb-4 relative z-10">Precisa de cabo, adaptador ou periférico?</h3>
              <p className="text-foreground relative z-10 leading-relaxed">
                Temos cabos, adaptadores, teclados, mouses e peças para resolver rapidamente o que está faltando no seu setup.
              </p>
            </Card>

            {/* PCs Gamers */}
            <Card className="card-cyberpunk p-8 rounded-sm relative overflow-hidden group bg-primary/5">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl group-hover:bg-primary/20 transition-all"></div>
              <i className="fas fa-gamepad text-5xl text-primary mb-6 relative z-10"></i>
              <h3 className="font-display text-2xl font-bold mb-4 relative z-10">Baixo desempenho em jogos</h3>
              <p className="text-foreground/80 relative z-10 leading-relaxed">
                Otimizamos e fazemos upgrade para seu PC rodar melhor: mais FPS, menor travamento e configuração ideal para seu objetivo.
              </p>
            </Card>

            {/* Computadores Domésticos */}
            <Card className="card-cyberpunk p-8 rounded-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-3xl group-hover:bg-accent/20 transition-all"></div>
              <i className="fas fa-desktop text-5xl text-accent mb-6 relative z-10"></i>
              <h3 className="font-display text-2xl font-bold mb-4 relative z-10">Computador lento ou travando</h3>
              <p className="text-foreground relative z-10 leading-relaxed">
                Formatação e limpeza, remoção de vírus, upgrade de RAM e SSD para estudos e trabalho sem interrupções.
              </p>
            </Card>

            {/* Servidores */}
            <Card className="card-cyberpunk p-8 rounded-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-3xl group-hover:bg-accent/20 transition-all"></div>
              <i className="fas fa-server text-5xl text-accent mb-6 relative z-10"></i>
              <h3 className="font-display text-2xl font-bold mb-4 relative z-10">Sistema da empresa instável ou sem backup</h3>
              <p className="text-foreground relative z-10 leading-relaxed">
                Implementamos servidor, backup automático e manutenção para evitar paradas e perda de dados.
              </p>
            </Card>

            {/* Redes */}
            <Card className="card-cyberpunk p-8 rounded-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl group-hover:bg-primary/20 transition-all"></div>
              <i className="fas fa-network-wired text-5xl text-primary mb-6 relative z-10"></i>
              <h3 className="font-display text-2xl font-bold mb-4 relative z-10">Wi‑Fi fraco, caindo ou internet lenta</h3>
              <p className="text-foreground relative z-10 leading-relaxed">
                Configuração de roteador, otimização de rede e ampliação de cobertura para conexão estável em toda a casa ou empresa.
              </p>
            </Card>

            {/* Impressoras */}
            <Card className="card-cyberpunk p-8 rounded-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-3xl group-hover:bg-accent/20 transition-all"></div>
              <i className="fas fa-print text-5xl text-accent mb-6 relative z-10"></i>
              <h3 className="font-display text-2xl font-bold mb-4 relative z-10">Impressora não imprime</h3>
              <p className="text-foreground relative z-10 leading-relaxed">
                Instalação de drivers, configuração de rede, manutenção e recarga para voltar a imprimir sem dor de cabeça.
              </p>
            </Card>
          </div>
        </div>
      </section>

{/* Store Section - Versão Melhorada */}
<section className="py-32 bg-card/30 relative diagonal-cut-top diagonal-cut-bottom">
  <div className="absolute inset-0 hexagon-pattern opacity-30"></div>
  
  <div className="container mx-auto relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      
      {/* Conteúdo */}
      <div className="order-2 lg:order-1">
        
        <div className="inline-block bg-accent/10 border border-accent/30 px-4 py-2 rounded-sm mb-6">
          <span className="font-mono text-sm text-accent">
            <i className="fas fa-store mr-2"></i>
            LOJA FÍSICA EM OSÓRIO
          </span>
        </div>

        <h2 className="font-display text-4xl md:text-6xl mb-6 uppercase leading-tight">
          PRECISOU? <br/>
          <span className="text-accent neon-glow-cyan">TEM NA HORA</span>
        </h2>

        <p className="text-foreground text-lg mb-4 leading-relaxed">
          <strong>Acabou o cabo? Mouse pifou? Precisa de uma FONTE urgente?</strong>
        </p>
        
        <p className="text-foreground/90 text-base mb-8 leading-relaxed">
          Nossa loja física tem estoque de periféricos, componentes e acessórios. 
        </p>

        {/* Cards de categorias */}
        <div className="space-y-4 mb-8">
          
          <div className="flex items-start gap-4 p-5 bg-background/60 rounded-sm border-l-4 border-accent hover:bg-background/80 transition-all group">
            <div className="bg-accent/10 p-3 rounded-sm group-hover:bg-accent/20 transition-all">
              <i className="fas fa-keyboard text-accent text-2xl"></i>
            </div>
            <div className="flex-1">
              <h4 className="font-bold mb-2 text-foreground">Periféricos Gamers & Profissionais</h4>
              <p className="text-sm text-foreground/80 leading-relaxed">
                Teclados desde modelos mais basicos até mais avançados, uma ampla varidade de mouses para todos os gostos ou necessidades, 
                headsets com cancelamento de ruído.
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="font-mono text-xs bg-accent/10 px-2 py-1 rounded">Logitech</span>
                <span className="font-mono text-xs bg-accent/10 px-2 py-1 rounded">Razer</span>
                <span className="font-mono text-xs bg-accent/10 px-2 py-1 rounded">HyperX</span>
                <span className="font-mono text-xs bg-accent/10 px-2 py-1 rounded">Redragon</span>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 bg-background/60 rounded-sm border-l-4 border-accent hover:bg-background/80 transition-all group">
            <div className="bg-accent/10 p-3 rounded-sm group-hover:bg-accent/20 transition-all">
              <i className="fas fa-microchip text-accent text-2xl"></i>
            </div>
            <div className="flex-1">
              <h4 className="font-bold mb-2 text-foreground">Componentes & Upgrades</h4>
              <p className="text-sm text-foreground/80 leading-relaxed">
                Memórias RAM DDR4/DDR5, SSDs NVMe e SATA, HDs, fontes certificadas 80 Plus, 
                coolers, gabinetes, pasta térmica de qualidade
              </p>
              <div className="flex items-center gap-2 mt-3 text-xs text-accent">
                <i className="fas fa-box-open"></i>
                <span className="font-mono">Estoque rotativo semanal</span>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 bg-background/60 rounded-sm border-l-4 border-accent hover:bg-background/80 transition-all group">
            <div className="bg-accent/10 p-3 rounded-sm group-hover:bg-accent/20 transition-all">
              <i className="fas fa-plug text-accent text-2xl"></i>
            </div>
            <div className="flex-1">
              <h4 className="font-bold mb-2 text-foreground">Cabos, Adaptadores & Acessórios</h4>
              <p className="text-sm text-foreground/80 leading-relaxed">
                HDMI 2.1, DisplayPort 1.4, USB-C, Thunderbolt, cabos de rede Cat6/Cat7, 
                adaptadores de vídeo/áudio, hubs USB, suportes para monitor, organizadores de cabos
              </p>
              <div className="flex items-center gap-2 mt-3 text-xs text-accent">
                <i className="fas fa-clock"></i>
                <span className="font-mono">Resolvemos seu problema na hora</span>
              </div>
            </div>
          </div>

        </div>

        {/* Benefícios da loja física */}
        <div className="bg-gradient-to-r from-accent/10 to-transparent border border-accent/30 p-5 rounded-sm mb-8">
          <p className="font-bold text-sm mb-3 text-accent">
            <i className="fas fa-star mr-2"></i>
            POR QUE COMPRAR NA LOJA?
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex items-center gap-2">
              <i className="fas fa-check-circle text-accent text-sm"></i>
              <span className="text-xs text-foreground/90">Leva na hora, sem espera</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-check-circle text-accent text-sm"></i>
              <span className="text-xs text-foreground/90">Testa antes de comprar</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-check-circle text-accent text-sm"></i>
              <span className="text-xs text-foreground/90">Consultoria técnica grátis</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-check-circle text-accent text-sm"></i>
              <span className="text-xs text-foreground/90">Troca fácil se der problema</span>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex-1">
            <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-base font-black rounded-sm transition-all hover:shadow-lg hover:shadow-accent/50">
              <i className="fab fa-whatsapp mr-2 text-xl"></i>
              CONSULTAR DISPONIBILIDADE
            </Button>
          </a>
          <a href="#localizacao" className="flex-1">
            <Button variant="outline" className="w-full border-2 border-accent/50 hover:border-accent hover:bg-accent/10 px-8 py-6 text-base font-black rounded-sm transition-all">
              <i className="fas fa-map-marker-alt mr-2"></i>
              VER LOCALIZAÇÃO
            </Button>
          </a>
        </div>

        {/* Horário de funcionamento */}
        <div className="mt-6 flex items-start gap-3 p-4 bg-background/40 border border-accent/20 rounded-sm">
          <i className="fas fa-clock text-accent mt-1"></i>
          <div>
            <p className="font-bold text-sm mb-1">Horário de Atendimento</p>
            <p className="font-mono text-xs text-foreground/70">
              Seg-Sex: 8h às 12h e das 13:30 às 18h | Sáb: 8h às 12h
            </p>
          </div>
        </div>

      </div>

      {/* Imagem */}
      <div className="order-1 lg:order-2 relative">
        <div className="absolute -inset-4 bg-accent/20 blur-3xl rounded-lg animate-pulse"></div>
        <img 
          src="/images/loja.jpeg" 
          alt="Loja de Informática em Osório - Periféricos e Componentes" 
          className="relative rounded-sm shadow-2xl shadow-accent/30 border border-accent/30"
        />
        
        {/* Badge flutuante */}
        <div className="absolute -top-4 -left-4 bg-accent text-accent-foreground px-5 py-3 rounded-sm shadow-xl rotate-3">
          <p className="font-black text-lg leading-none">ESTOQUE</p>
          <p className="font-mono text-xs mt-1">REAL</p>
        </div>

        {/* Badge de pronta entrega */}
        <div className="absolute -bottom-6 -right-6 bg-background border-2 border-accent px-5 py-3 rounded-sm shadow-xl">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <div>
              <p className="font-black text-sm text-accent">PRONTA ENTREGA</p>
              <p className="font-mono text-xs text-foreground/70">Sem espera</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>




      {/* Gaming Section - Versão Melhorada */}
<section className="py-32 bg-background relative overflow-hidden">
  {/* Efeito de fundo */}
  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10"></div>
  
  <div className="container mx-auto relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      
      {/* Imagem */}
      <div className="relative order-2 lg:order-1">
        <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-lg animate-pulse"></div>
        <img 
          src="/images/pcgamer.webp" 
          alt="PC Gamer Montado Profissionalmente em Osório" 
          className="relative rounded-sm shadow-2xl shadow-primary/30 border border-primary/30"
        />
        {/* Badge de garantia */}
        <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground px-6 py-3 rounded-sm shadow-xl">
          <p className="font-black text-sm">GARANTIA TOTAL</p>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="order-1 lg:order-2">
        <div className="inline-block bg-primary/10 border border-primary/30 px-4 py-2 rounded-sm mb-6">
          <span className="font-mono text-sm text-primary">
            <i className="fas fa-map-marker-alt mr-2"></i>
            ATENDIMENTO EM OSÓRIO/RS
          </span>
        </div>

        <h2 className="font-display text-4xl md:text-6xl mb-6 uppercase leading-tight">
          SEU PC GAMER <br/>
          <span className="text-primary neon-glow-red">NÃO VAI TRAVAR</span>
        </h2>

        <div className="bg-background/50 border-l-4 border-primary p-4 mb-6">
          <p className="text-foreground text-lg font-bold leading-relaxed">
            Cada PC passa por 24h de testes ANTES da entrega.
          </p>
          <p className="text-foreground/80 text-base mt-2 leading-relaxed">
            Stress test de CPU/GPU, monitoramento de temperatura, benchmarks reais. 
            Você recebe o relatório completo provando que sua máquina está 100%.
          </p>
        </div>

        <p className="text-foreground/90 text-base mb-8 leading-relaxed">
          Cansado de PC que esquenta, trava na ranked ou tem queda de FPS? 
          Aqui a montagem é <strong>profissional de verdade</strong>: gerenciamento 
          de cabos, pasta térmica aplicada corretamente, configuração de BIOS otimizada 
          e setup completo de RGB.
        </p>

        {/* Diferenciais em Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-background/30 border border-primary/20 p-4 rounded-sm hover:border-primary/40 transition-all">
            <div className="flex items-start gap-3">
              <i className="fas fa-vial text-primary text-xl mt-1"></i>
              <div>
                <p className="font-bold text-sm mb-1">Testes Reais</p>
                <p className="font-mono text-xs text-foreground/70">Stress 24h + Benchmark</p>
              </div>
            </div>
          </div>

          <div className="bg-background/30 border border-primary/20 p-4 rounded-sm hover:border-primary/40 transition-all">
            <div className="flex items-start gap-3">
              <i className="fas fa-store text-primary text-xl mt-1"></i>
              <div>
                <p className="font-bold text-sm mb-1">Atendimento Local</p>
                <p className="font-mono text-xs text-foreground/70">Osório - Presencial</p>
              </div>
            </div>
          </div>

          <div className="bg-background/30 border border-primary/20 p-4 rounded-sm hover:border-primary/40 transition-all">
            <div className="flex items-start gap-3">
              <i className="fas fa-shield-alt text-primary text-xl mt-1"></i>
              <div>
                <p className="font-bold text-sm mb-1">Garantia Completa</p>
                <p className="font-mono text-xs text-foreground/70">Peças + mão de obra</p>
              </div>
            </div>
          </div>

          <div className="bg-background/30 border border-primary/20 p-4 rounded-sm hover:border-primary/40 transition-all">
            <div className="flex items-start gap-3">
              <i className="fas fa-headset text-primary text-xl mt-1"></i>
              <div>
                <p className="font-bold text-sm mb-1">Suporte Direto</p>
                <p className="font-mono text-xs text-foreground/70">WhatsApp sem chatbot</p>
              </div>
            </div>
          </div>
        </div>

        {/* Specs técnicas */}
        <div className="bg-gradient-to-r from-primary/5 to-transparent border border-primary/20 p-5 rounded-sm mb-8">
          <p className="font-mono text-xs text-primary mb-3 uppercase tracking-wider">Componentes Disponíveis</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="flex items-center gap-2">
              <i className="fas fa-microchip text-primary/70 text-sm"></i>
              <span className="font-mono text-xs">RTX 40 Series</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-microchip text-primary/70 text-sm"></i>
              <span className="font-mono text-xs">Intel 14th Gen</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-memory text-primary/70 text-sm"></i>
              <span className="font-mono text-xs">DDR5 RAM</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-hdd text-primary/70 text-sm"></i>
              <span className="font-mono text-xs">NVMe Gen4/Gen5</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-fan text-primary/70 text-sm"></i>
              <span className="font-mono text-xs">Water Cooling</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-lightbulb text-primary/70 text-sm"></i>
              <span className="font-mono text-xs">RGB Completo</span>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex-1">
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-black rounded-sm transition-all hover:shadow-lg hover:shadow-primary/50 hover:scale-105">
              <i className="fab fa-whatsapp mr-2 text-xl"></i>
              MONTAR MEU PC AGORA
            </Button>
          </a>
       
        </div>

        {/* Micro prova social */}
        <div className="mt-6 flex items-center gap-3 text-sm text-foreground/60">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center">
              <i className="fas fa-user text-xs text-primary"></i>
            </div>
            <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center">
              <i className="fas fa-user text-xs text-primary"></i>
            </div>
            <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center">
              <i className="fas fa-user text-xs text-primary"></i>
            </div>
          </div>
          <p className="font-mono text-xs">
            <span className="text-primary font-bold">+50 PCs</span> montados em 2025
          </p>
        </div>

      </div>
    </div>
  </div>
</section>

     

   {/* Technical Support Section - Versão Melhorada */}
<section className="py-32 bg-background relative overflow-hidden">
  {/* Efeito de fundo */}
  <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5"></div>
  
  <div className="container mx-auto relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch bg-card/50 rounded-sm border border-border overflow-hidden shadow-2xl">
      
      {/* Imagem com overlay */}
      <div className="relative h-80 lg:h-auto order-2 lg:order-1">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/80 lg:to-background/60 z-10"></div>
        <img 
          src="/images/technician-workspace.png" 
          alt="Técnico de Informática em Osório - Atendimento Residencial e Empresarial" 
          className="w-full h-full object-cover"
        />
        
        {/* Badge flutuante */}
        <div className="absolute top-6 left-6 bg-primary text-primary-foreground px-5 py-3 rounded-sm shadow-2xl z-20 animate-pulse">
          <div className="flex items-center gap-2">
            <i className="fas fa-tools text-xl"></i>
            <div>
              <p className="font-black text-sm leading-none">ATENDIMENTO</p>
              <p className="font-mono text-xs mt-1">NO LOCAL</p>
            </div>
          </div>
        </div>

        {/* Badge de tempo de resposta */}
        <div className="absolute bottom-6 left-6 bg-background/95 backdrop-blur-sm border border-primary/30 px-4 py-3 rounded-sm shadow-xl z-20">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
              <i className="fas fa-clock absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-primary text-sm"></i>
            </div>
            <div>
              <p className="font-bold text-xs text-foreground">Resposta Rápida</p>
              
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="p-8 lg:p-16 order-1 lg:order-2">
        
        <div className="inline-block bg-primary/10 border border-primary/30 px-4 py-2 rounded-sm mb-6">
          <span className="font-mono text-sm text-primary">
            <i className="fas fa-home mr-2"></i>
            VAMOS ATÉ VOCÊ - OSÓRIO E REGIÃO
          </span>
        </div>

        <h2 className="font-display text-3xl md:text-5xl mb-6 uppercase leading-tight">
          SEU PC TRAVOU? <br/>
          <span className="text-primary neon-glow-red">NÓS RESOLVEMOS</span>
        </h2>

        <p className="text-foreground text-lg mb-4 leading-relaxed font-bold">
          Atendimento técnico residencial e empresarial sem enrolação.
        </p>

        <p className="text-foreground/90 text-base mb-8 leading-relaxed">
          Seu computador travando, internet lenta, impressora com erro, backup não funciona? 
          Nós vamos até sua casa ou empresa, diagnóstico o problema e resolvo na hora quando 
          possível. Sem surpresas no orçamento, sem levar seu equipamento embora "para análise".
        </p>

        {/* Serviços em formato diferenciado */}
        <div className="mb-8 space-y-3">
          <p className="font-bold text-sm text-primary uppercase tracking-wider mb-4">
            <i className="fas fa-wrench mr-2"></i>
            O QUE EU RESOLVO:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Notebooks & PCs */}
            <div className="bg-background/60 border-l-4 border-primary p-4 rounded-sm hover:bg-background/80 transition-all">
              <div className="flex items-start gap-3">
                <i className="fas fa-laptop text-primary text-lg mt-1"></i>
                <div>
                  <p className="font-bold text-sm mb-1">Notebooks & PCs</p>
                  <p className="text-xs text-foreground/70 leading-relaxed">
                    Lentidão, instalação de software, licenças, periféricos, consultoria técnica
                  </p>
                </div>
              </div>
            </div>

            {/* Redes */}
            <div className="bg-background/60 border-l-4 border-primary p-4 rounded-sm hover:bg-background/80 transition-all">
              <div className="flex items-start gap-3">
                <i className="fas fa-wifi text-primary text-lg mt-1"></i>
                <div>
                  <p className="font-bold text-sm mb-1">Internet & Wi-Fi</p>
                  <p className="text-xs text-foreground/70 leading-relaxed">
                    Wi-Fi lento, sem sinal em cômodos, configuração de roteador, rede cabeada
                  </p>
                </div>
              </div>
            </div>

            {/* Backup */}
            <div className="bg-background/60 border-l-4 border-primary p-4 rounded-sm hover:bg-background/80 transition-all">
              <div className="flex items-start gap-3">
                <i className="fas fa-hdd text-primary text-lg mt-1"></i>
                <div>
                  <p className="font-bold text-sm mb-1">Backup & Recuperação</p>
                  <p className="text-xs text-foreground/70 leading-relaxed">
                    Configuração automática, recuperação de arquivos, migração de dados
                  </p>
                </div>
              </div>
            </div>

            {/* Impressoras */}
            <div className="bg-background/60 border-l-4 border-primary p-4 rounded-sm hover:bg-background/80 transition-all">
              <div className="flex items-start gap-3">
                <i className="fas fa-print text-primary text-lg mt-1"></i>
                <div>
                  <p className="font-bold text-sm mb-1">Impressoras</p>
                  <p className="text-xs text-foreground/70 leading-relaxed">
                    Não imprime, erro de driver, configuração em rede, instalação
                  </p>
                </div>
              </div>
            </div>

            {/* Empresas */}
            <div className="bg-background/60 border-l-4 border-primary p-4 rounded-sm hover:bg-background/80 transition-all">
              <div className="flex items-start gap-3">
                <i className="fas fa-building text-primary text-lg mt-1"></i>
                <div>
                  <p className="font-bold text-sm mb-1">Empresas</p>
                  <p className="text-xs text-foreground/70 leading-relaxed">
                    Servidores, cabeamento estruturado, compartilhamento de dados.
                  </p>
                </div>
              </div>
            </div>

            {/* Outros */}
          
          </div>
        </div>

        {/* Diferenciais */}
        <div className="bg-gradient-to-r from-primary/10 to-transparent border border-primary/20 p-5 rounded-sm mb-8">
          <p className="font-bold text-sm mb-3 text-primary">
            <i className="fas fa-certificate mr-2"></i>
            COMO FUNCIONA O ATENDIMENTO:
          </p>
          <div className="space-y-2">
            <div className="flex items-start gap-3">
              <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</div>
              <p className="text-sm text-foreground/90">Você entra em contato pelo WhatsApp descrevendo o problema</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</div>
              <p className="text-sm text-foreground/90">Agendo visita para o mesmo dia ou no dia seguinte</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</div>
              <p className="text-sm text-foreground/90">É feito diagnóstico no local e passo orçamento ANTES de fazer qualquer coisa</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">4</div>
              <p className="text-sm text-foreground/90">Resolvemos o problema (maioria dos casos na mesma visita)</p>
            </div>
          </div>
        </div>

        {/* Informações importantes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          <div className="flex items-center gap-3 bg-background/40 p-3 rounded-sm border border-border">
            <i className="fas fa-money-bill-wave text-primary text-lg"></i>
            <div>
              <p className="text-xs font-bold">Orçamento Transparente</p>
              <p className="text-xs text-foreground/70 font-mono">Sem pegadinhas</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-background/40 p-3 rounded-sm border border-border">
            <i className="fas fa-shield-alt text-primary text-lg"></i>
            <div>
              <p className="text-xs font-bold">Garantia do Serviço</p>
              <p className="text-xs text-foreground/70 font-mono">30 dias</p>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col gap-4">
          <a href={whatsappLinkPhone} target="_blank" rel="noopener noreferrer">
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-black rounded-sm transition-all hover:shadow-lg hover:shadow-primary/50 hover:scale-105">
              <i className="fab fa-whatsapp mr-3 text-2xl"></i>
              CHAMAR TÉCNICO AGORA
            </Button>
          </a>
           <a href="#localizacao" className="flex-1">
            <Button variant="outline" className="w-full border-2 border-accent/50 hover:border-accent hover:bg-accent/10 px-8 py-6 text-base font-black rounded-sm transition-all">
              <i className="fas fa-map-marker-alt mr-2"></i>
              VER LOCALIZAÇÃO
            </Button>
          </a>
          <div className="flex items-center justify-center gap-2 text-xs text-foreground/60">
            <i className="fas fa-phone-alt text-primary"></i>
            <span className="font-mono">Atendimento de segunda a sábado | Emergências: WhatsApp</span>
          </div>
        </div>

        {/* Micro prova social */}
        <div className="mt-6 pt-6 border-t border-border flex items-center gap-4">
          <div className="flex -space-x-3">
            <div className="w-10 h-10 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center">
              <i className="fas fa-user text-sm text-primary"></i>
            </div>
            <div className="w-10 h-10 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center">
              <i className="fas fa-user text-sm text-primary"></i>
            </div>
            <div className="w-10 h-10 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center">
              <i className="fas fa-user text-sm text-primary"></i>
            </div>
          </div>
          <div>
            <p className="text-sm font-bold text-foreground">
              <span className="text-primary">+200</span> atendimentos em 2025
            </p>
            <p className="text-xs text-foreground/70 font-mono">Residências e empresas em Osório</p>
          </div>
        </div>

      </div>

    </div>
  </div>
</section>

      {/* Business Section */}
      <section className="py-32 bg-card/30 relative diagonal-cut-top overflow-hidden">
        <div className="absolute inset-0 hexagon-pattern opacity-20"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Imagem */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-4 bg-accent/20 blur-3xl rounded-lg animate-pulse"></div>
              <img 
                src="/images/Empresa.webp" 
                alt="Infraestrutura de TI para Empresas em Osório" 
                className="relative rounded-sm shadow-2xl shadow-accent/30 border border-accent/30"
              />
              
              <div className="absolute -top-6 -right-6 bg-accent text-accent-foreground px-6 py-4 rounded-sm shadow-2xl rotate-6">
                <p className="font-black text-lg leading-none">SLA</p>
                <p className="font-mono text-xs mt-1">GARANTIDO</p>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-background border-2 border-accent px-5 py-3 rounded-sm shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </div>
                  <div>
                    <p className="font-black text-sm text-accent">SUPORTE 24/7</p>
                    <p className="font-mono text-xs text-foreground/70">Para emergências</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              
              <div className="inline-block bg-accent/10 border border-accent/30 px-4 py-2 rounded-sm mb-6">
                <span className="font-mono text-sm text-accent">
                  <i className="fas fa-building mr-2"></i>
                  SOLUÇÕES PARA EMPRESAS
                </span>
              </div>

              <h2 className="font-display text-4xl md:text-6xl mb-6 uppercase leading-tight">
                SUA EMPRESA <br/>
                <span className="text-accent neon-glow-cyan">SEM PARAR</span>
              </h2>

              <div className="bg-background/50 border-l-4 border-accent p-4 mb-6">
                <p className="text-foreground text-lg font-bold leading-relaxed">
                  Computador parado é prejuízo. Internet caindo é venda perdida.
                </p>
                <p className="text-foreground/80 text-base mt-2 leading-relaxed">
                  Oferecemos contratos de manutenção preventiva e suporte dedicado para manter 
                  sua operação rodando 100%. Atendimento prioritário e tempo de resposta garantido.
                </p>
              </div>

              <p className="text-foreground/90 text-base mb-8 leading-relaxed">
                Atendemos desde pequenos comércios até empresas de médio porte em Osório e região. 
                Montamos a infraestrutura completa ou assumimos a manutenção do que já existe.
              </p>

              <div className="space-y-4 mb-8">
                
                <div className="flex items-start gap-4 p-5 bg-background/60 rounded-sm border-l-4 border-accent hover:bg-background/80 transition-all">
                  <div className="bg-accent/10 p-3 rounded-sm">
                    <i className="fas fa-network-wired text-accent text-2xl"></i>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold mb-2 text-foreground">Infraestrutura de Rede</h4>
                    <p className="text-sm text-foreground/80 leading-relaxed mb-3">
                      Cabeamento Cat6/Cat7, switches gerenciáveis, roteadores empresariais, 
                      VLANs, rede Wi-Fi corporativa com múltiplos APs
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="font-mono text-xs bg-accent/10 px-2 py-1 rounded">Cabeamento</span>
                      <span className="font-mono text-xs bg-accent/10 px-2 py-1 rounded">Wi-Fi</span>
                      <span className="font-mono text-xs bg-accent/10 px-2 py-1 rounded">VLANs</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-background/60 rounded-sm border-l-4 border-accent hover:bg-background/80 transition-all">
                  <div className="bg-accent/10 p-3 rounded-sm">
                    <i className="fas fa-shield-alt text-accent text-2xl"></i>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold mb-2 text-foreground">Segurança & Backup</h4>
                    <p className="text-sm text-foreground/80 leading-relaxed mb-3">
                      Firewalls, antivírus corporativo, backup automático diário 
                      com armazenamento local e nuvem
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="font-mono text-xs bg-accent/10 px-2 py-1 rounded">Firewall</span>
                      <span className="font-mono text-xs bg-accent/10 px-2 py-1 rounded">Backup</span>
                      <span className="font-mono text-xs bg-accent/10 px-2 py-1 rounded">Antivírus</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-background/60 rounded-sm border-l-4 border-accent hover:bg-background/80 transition-all">
                  <div className="bg-accent/10 p-3 rounded-sm">
                    <i className="fas fa-headset text-accent text-2xl"></i>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold mb-2 text-foreground">Suporte Dedicado</h4>
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      Atendimento prioritário, contratos mensais sem fidelidade, SLA garantido por contrato
                    </p>
                  </div>
                </div>

              </div>

              <a href={whatsappLinkPhone} target="_blank" rel="noopener noreferrer">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg font-black rounded-sm transition-all hover:shadow-lg hover:shadow-accent/50">
                  <i className="fab fa-whatsapp mr-2 text-xl"></i>
                  SOLICITAR PROPOSTA
                </Button>
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-primary/20 via-background to-accent/20 relative overflow-hidden">
        <div className="absolute inset-0 hexagon-pattern opacity-20"></div>
        
        <div className="container mx-auto text-center relative z-10">
          
          <div className="max-w-3xl mx-auto">
            
            <div className="inline-block bg-primary/10 border border-primary/30 px-5 py-2 rounded-full mb-8">
              <span className="font-mono text-sm text-primary">
                <i className="fas fa-bolt mr-2"></i>
                ATENDIMENTO IMEDIATO
              </span>
            </div>

            <h2 className="font-display text-4xl md:text-6xl mb-6 uppercase leading-tight">
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
        </div>
      </section>

      <section id="localizacao" className="py-24 bg-card/40 relative">
  <div className="container mx-auto">
    <h2 className="font-display text-4xl md:text-5xl mb-6 uppercase">
      <span className="text-accent">Localização</span>
    </h2>
    <p className="text-foreground/90 mb-8">
      {address}
    </p>
    <div className="rounded-sm border border-accent/30 overflow-hidden bg-background/60">
      <iframe
        title="Mapa - Myranda Informática"
        src={mapsEmbedUrl}
        className="w-full h-[420px]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
    <div className="mt-6 flex flex-col sm:flex-row gap-4">
      <a href={mapsLink} target="_blank" rel="noopener noreferrer">
        <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-6 text-base font-black rounded-sm">
          VER NO GOOGLE MAPS
        </Button>
      </a>
      <a href={directionsLink} target="_blank" rel="noopener noreferrer">
        <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-base font-black rounded-sm">
          ABRIR ROTA
        </Button>
      </a>
    </div>
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
            <a href="https://www.instagram.com/myranda_informatica/" className="text-muted-foreground hover:text-primary transition-colors">
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
