# 🚀 Lift Detox Black - Página de Redirecionamento (Meta Ads)

Este repositório contém a **página de redirecionamento para WhatsApp** do produto **Lift Detox Black**, **focada exclusivamente em campanhas no Meta Business** (Facebook e Instagram Ads), com rastreamento via **Pixel do Meta**.

---

## ✅ O que este projeto faz
- Redireciona automaticamente o visitante para o **WhatsApp com mensagem pronta**.
- Registra o **evento de PageView** no **Pixel do Meta** para rastrear cliques em campanhas.
- Permite otimização de campanhas para **cliques e conversões no WhatsApp**.

---

## 📂 Estrutura do projeto

```
/ (raiz)
├── index.html      # Página de redirecionamento com Pixel do Meta
└── README.md       # Este arquivo
```

---

## ⚙️ Como utilizar

1️⃣ **Edite o Pixel do Meta no `index.html`**

- Substitua `1680388886212574` pelo ID do seu Pixel no trecho:

```html
<!-- Meta Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'SEU_PIXEL_ID_AQUI');
  fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
  src="https://www.facebook.com/tr?id=SEU_PIXEL_ID_AQUI&ev=PageView&noscript=1"
/></noscript>
<!-- End Meta Pixel Code -->
```

2️⃣ **Suba no GitHub (ou GitLab) conectado ao Vercel**

- O Vercel fará o deploy automaticamente.
- O link gerado será usado como **URL final nas campanhas do Meta Business**.

3️⃣ **Use o [Meta Pixel Helper](https://chrome.google.com/webstore/detail/meta-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc)**
- Abra a URL do Vercel no navegador.
- Verifique se o **PageView do Pixel está sendo disparado** corretamente.

---

## 🎯 Como usar na campanha

- **Tipo de campanha sugerido**: Conversões ou Cliques no link (conforme estratégia).
- **Destino do anúncio**: URL do Vercel (redirecionamento automático).
- **Pixel configurado como evento de PageView ou Evento Personalizado**.

---

## ❓ Dúvidas frequentes

**1️⃣ Por que redirecionar em vez de enviar direto para o WhatsApp?**  
✔️ Para rastrear o clique/conversão usando o Pixel, que não é rastreado diretamente no WhatsApp.

**2️⃣ O Pixel rastreia conversas no WhatsApp?**  
❌ Não rastreia conversas dentro do WhatsApp. Ele rastreia apenas a **visita no link antes do redirecionamento**, servindo como parâmetro de conversão.

**3️⃣ Posso usar este mesmo link para diferentes anúncios?**  
✔️ Sim, para rastrear cliques gerais.  
✅ Para rastrear campanhas separadas, utilize parâmetros UTM no anúncio ou duplique a página com URLs distintas.

---

## 📞 Suporte rápido

Caso precise de **ajuste de Pixel, UTM, ou tags adicionais**, entre em contato para auxiliar na otimização.

---

🚀 **Agora é só subir, rastrear no Pixel Helper e rodar suas campanhas com controle no Meta Business!**

---

Feito com ❤️ para facilitar suas vendas do **Lift Detox Black**.


