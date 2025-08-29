export const IMAGES = {
  hero: {
    bgDark:
      "https://readdy.ai/api/search-image?query=Dark%20medical%20facility%20interior%20with%20moody%20lighting%2C%20professional%20healthcare%20environment%20with%20deep%20shadows%2C%20modern%20surgical%20equipment%20silhouettes%2C%20dramatic%20dark%20blue%20and%20black%20color%20scheme%2C%20minimalist%20medical%20center%20atmosphere%2C%20low-key%20lighting%20creating%20strong%20contrast%2C%20sophisticated%20medical%20technology%20background&width=1920&height=1080&seq=hero-bg-dark&orientation=landscape",
    before:
      "https://readdy.ai/api/search-image?query=Professional%20medical%20consultation%20room%20with%20Brazilian%20doctor%20consulting%20patient%2C%20warm%20lighting%2C%20modern%20medical%20equipment%2C%20trust%20and%20confidence%20atmosphere%2C%20before%20surgery%20consultation%2C%20medical%20professionalism%2C%20hope%20and%20care%20environment&width=500&height=600&seq=before-consultation&orientation=portrait",
    after:
      "https://readdy.ai/api/search-image?query=Happy%20healthy%20person%20celebrating%20weight%20loss%20success%2C%20vibrant%20lifestyle%2C%20active%20and%20confident%2C%20post%20bariatric%20surgery%20transformation%2C%20joyful%20Brazilian%20person%2C%20new%20life%20beginning%2C%20health%20and%20vitality%2C%20bright%20and%20positive%20atmosphere&width=500&height=600&seq=after-transformation&orientation=portrait",
  },
  doctor: {
    portrait:
      "https://readdy.ai/api/search-image?query=Professional%20Brazilian%20bariatric%20surgeon%20Dr.%20Thiago%20Ramos%20in%20medical%20coat%2C%20warm%20smile%2C%20confident%20posture%2C%20modern%20medical%20office%20background%2C%20compassionate%20doctor%2C%20trustworthy%20medical%20professional%2C%20Brazilian%20healthcare%20specialist&width=500&height=600&seq=dr-thiago&orientation=portrait",
  },
  transformacao: {
    heroBg:
      "https://readdy.ai/api/search-image?query=Modern%20medical%20science%20laboratory%20with%20DNA%20strands%2C%20molecular%20structures%2C%20advanced%20medical%20technology%2C%20scientific%20research%20environment%2C%20medical%20innovation%20concept%2C%20blue%20and%20green%20lighting&width=1920&height=1080&seq=science-bg&orientation=landscape",
  },
  procedures: {
    bypass:
      "https://readdy.ai/api/search-image?query=Medical%20illustration%20of%20gastric%20bypass%20surgery%20procedure%2C%20anatomical%20diagram%20showing%20stomach%20reduction%20and%20intestinal%20rerouting%2C%20professional%20medical%20visualization%2C%20educational%20healthcare%20diagram&width=400&height=300&seq=bypass-procedure&orientation=landscape",
    sleeve:
      "https://readdy.ai/api/search-image?query=Medical%20illustration%20of%20sleeve%20gastrectomy%20surgery%2C%20stomach%20sleeve%20procedure%20diagram%2C%20vertical%20sleeve%20anatomy%2C%20professional%20medical%20visualization%20for%20patient%20education&width=400&height=300&seq=sleeve-procedure&orientation=landscape",
    band:
      "https://readdy.ai/api/search-image?query=Medical%20illustration%20of%20gastric%20band%20surgery%2C%20adjustable%20gastric%20band%20procedure%20diagram%2C%20laparoscopic%20band%20placement%2C%20professional%20medical%20educational%20visualization&width=400&height=300&seq=band-procedure&orientation=landscape",
  },
  timeline: {
    pre:
      "https://readdy.ai/api/search-image?query=Brazilian%20woman%20before%20bariatric%20surgery%2C%20determined%20expression%2C%20medical%20consultation%20preparation%2C%20hope%20in%20eyes%2C%20professional%20medical%20setting%2C%20before%20transformation%20journey%20begins&width=300&height=200&seq=timeline-pre&orientation=landscape",
    m1:
      "https://readdy.ai/api/search-image?query=Brazilian%20woman%20one%20month%20after%20surgery%2C%20early%20recovery%2C%20slight%20weight%20loss%20visible%2C%20medical%20follow-up%20appointment%2C%20positive%20mood%2C%20healing%20process&width=300&height=200&seq=timeline-1m&orientation=landscape",
    m3:
      "https://readdy.ai/api/search-image?query=Brazilian%20woman%20three%20months%20post%20surgery%2C%20noticeable%20weight%20loss%2C%20healthy%20eating%20habits%2C%20cooking%20nutritious%20meals%2C%20positive%20lifestyle%20changes&width=300&height=200&seq=timeline-3m&orientation=landscape",
    m6:
      "https://readdy.ai/api/search-image?query=Brazilian%20woman%20six%20months%20after%20surgery%2C%20significant%20weight%20loss%2C%20exercising%20outdoors%2C%20confident%20and%20energetic%2C%20active%20lifestyle%2C%20transformation%20visible&width=300&height=200&seq=timeline-6m&orientation=landscape",
    m12:
      "https://readdy.ai/api/search-image?query=Brazilian%20woman%20one%20year%20after%20bariatric%20surgery%2C%20complete%20transformation%2C%20healthy%20weight%20achieved%2C%20radiant%20smile%2C%20celebrating%20success%2C%20new%20confident%20lifestyle&width=300&height=200&seq=timeline-12m&orientation=landscape",
  },
} as const;

export type ImageCatalog = typeof IMAGES;



