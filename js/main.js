const articleElement = document.querySelector('#article')
const postList = document.querySelector('#postList')

function Post() {
  this.content = []

  this.addTag = (tag, content) => {
    this.content.push({ tag, content })
  }

  this.toHTML = () => {
    const html = this.content.map(({ tag, content }) => {
      return `<${tag}>${content.replaceAll('<', '&lt;').replaceAll('>', '&gt;')}</${tag}>`
    })

    return html.join`\n`
  }
}

const postArray = [
  {
    name: 'bem-vindo!',
    description: 'seja bem-vindo ao blog do linguicinha! :D',
    content: [
      '* texto pra encher linguiça *',
      'lorem ipsum dolor sit amet, consectetur adipiscing elit. praesent ullamcorper lorem at nunc consequat rutrum. morbi turpis enim, pretium a ex eget, condimentum hendrerit justo. proin et nibh in orci convallis malesuada. aenean lobortis vehicula magna, ac lobortis mauris. aliquam ante mi, tristique id mi eu, gravida tristique diam. nulla tempor ultrices enim eget interdum. sed ornare neque vel lectus suscipit imperdiet. nullam malesuada risus eu turpis lobortis vestibulum. pellentesque id nisl ante. aliquam dignissim mollis nisl eu eleifend. sed vel arcu feugiat, lobortis ex quis, sagittis justo. cras finibus urna quis hendrerit gravida. donec laoreet, nisl in sagittis pellentesque, risus elit porttitor eros, vel tincidunt sem metus sollicitudin neque.',
      'curabitur eu scelerisque sem. nulla lacinia ante vitae pellentesque luctus. duis facilisis neque et enim suscipit hendrerit. proin ut vehicula ante, ac varius sem. pellentesque a suscipit nulla, porttitor auctor velit. integer dignissim massa ac nisl aliquam, ac pellentesque eros vehicula. nam at turpis enim. integer vel neque volutpat, auctor massa nec, ultrices quam. donec commodo leo in viverra scelerisque. nunc eu varius nisl.',
      'fusce neque massa, dapibus id maximus in, consectetur eu enim. nunc vel magna eu nunc malesuada ullamcorper. ut mollis auctor luctus. fusce eget nunc mi. aliquam erat volutpat. suspendisse mollis, nulla nec lobortis feugiat, ipsum eros laoreet arcu, sit amet dapibus ex magna vitae purus. in pharetra hendrerit rutrum. nunc faucibus felis diam, nec convallis purus fringilla porttitor. praesent eleifend sodales diam. sed augue magna, aliquet imperdiet magna et, vehicula egestas mi.',
      'nam vestibulum ullamcorper sem, ac sodales risus tincidunt a. pellentesque nec vulputate orci, non blandit neque. aliquam risus urna, efficitur quis mi sit amet, dictum blandit tortor. fusce justo nulla, semper at nunc eu, dignissim consectetur est. aliquam accumsan ante velit, vel laoreet augue aliquam vestibulum. phasellus mi arcu, congue vitae mi eget, eleifend volutpat odio. ut at gravida nibh, sed viverra libero. vestibulum sed gravida sem.',
      'aenean felis lorem, lacinia id varius at, posuere eget libero. in at tellus ut mauris facilisis fermentum. donec sed dignissim turpis. aliquam sit amet nunc nec orci dapibus sollicitudin. aliquam fringilla suscipit justo dignissim tincidunt. pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. aenean pretium et lorem in lobortis. in consequat lacus id suscipit tristique. nullam luctus molestie felis id auctor. aliquam at ex erat. fusce quis sollicitudin odio. integer convallis fringilla egestas. maecenas finibus sapien et aliquam luctus. nam porta elementum nunc, non mattis dui pulvinar eu. aenean in venenatis sapien.',
      'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    ]
  },
  {
    name: 'o que é poggers?',
    description: 'poggers ou não poggers? eis a questão.',
    content: [
      '* texto pra encher linguiça *',
      'lorem ipsum dolor sit amet, consectetur adipiscing elit. praesent ullamcorper lorem at nunc consequat rutrum. morbi turpis enim, pretium a ex eget, condimentum hendrerit justo. proin et nibh in orci convallis malesuada. aenean lobortis vehicula magna, ac lobortis mauris. aliquam ante mi, tristique id mi eu, gravida tristique diam. nulla tempor ultrices enim eget interdum. sed ornare neque vel lectus suscipit imperdiet. nullam malesuada risus eu turpis lobortis vestibulum. pellentesque id nisl ante. aliquam dignissim mollis nisl eu eleifend. sed vel arcu feugiat, lobortis ex quis, sagittis justo. cras finibus urna quis hendrerit gravida. donec laoreet, nisl in sagittis pellentesque, risus elit porttitor eros, vel tincidunt sem metus sollicitudin neque.',
      'curabitur eu scelerisque sem. nulla lacinia ante vitae pellentesque luctus. duis facilisis neque et enim suscipit hendrerit. proin ut vehicula ante, ac varius sem. pellentesque a suscipit nulla, porttitor auctor velit. integer dignissim massa ac nisl aliquam, ac pellentesque eros vehicula. nam at turpis enim. integer vel neque volutpat, auctor massa nec, ultrices quam. donec commodo leo in viverra scelerisque. nunc eu varius nisl.',
      'fusce neque massa, dapibus id maximus in, consectetur eu enim. nunc vel magna eu nunc malesuada ullamcorper. ut mollis auctor luctus. fusce eget nunc mi. aliquam erat volutpat. suspendisse mollis, nulla nec lobortis feugiat, ipsum eros laoreet arcu, sit amet dapibus ex magna vitae purus. in pharetra hendrerit rutrum. nunc faucibus felis diam, nec convallis purus fringilla porttitor. praesent eleifend sodales diam. sed augue magna, aliquet imperdiet magna et, vehicula egestas mi.',
      'nam vestibulum ullamcorper sem, ac sodales risus tincidunt a. pellentesque nec vulputate orci, non blandit neque. aliquam risus urna, efficitur quis mi sit amet, dictum blandit tortor. fusce justo nulla, semper at nunc eu, dignissim consectetur est. aliquam accumsan ante velit, vel laoreet augue aliquam vestibulum. phasellus mi arcu, congue vitae mi eget, eleifend volutpat odio. ut at gravida nibh, sed viverra libero. vestibulum sed gravida sem.',
      'aenean felis lorem, lacinia id varius at, posuere eget libero. in at tellus ut mauris facilisis fermentum. donec sed dignissim turpis. aliquam sit amet nunc nec orci dapibus sollicitudin. aliquam fringilla suscipit justo dignissim tincidunt. pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. aenean pretium et lorem in lobortis. in consequat lacus id suscipit tristique. nullam luctus molestie felis id auctor. aliquam at ex erat. fusce quis sollicitudin odio. integer convallis fringilla egestas. maecenas finibus sapien et aliquam luctus. nam porta elementum nunc, non mattis dui pulvinar eu. aenean in venenatis sapien.'
    ]
  },
  {
    name: 'jordano x andré: quem é mais calvo?',
    description: 'quem é o professor mais calvo do câmpus são carlos? 🤔🤔',
    content: [
      '* texto pra encher linguiça *',
      'lorem ipsum dolor sit amet, consectetur adipiscing elit. praesent ullamcorper lorem at nunc consequat rutrum. morbi turpis enim, pretium a ex eget, condimentum hendrerit justo. proin et nibh in orci convallis malesuada. aenean lobortis vehicula magna, ac lobortis mauris. aliquam ante mi, tristique id mi eu, gravida tristique diam. nulla tempor ultrices enim eget interdum. sed ornare neque vel lectus suscipit imperdiet. nullam malesuada risus eu turpis lobortis vestibulum. pellentesque id nisl ante. aliquam dignissim mollis nisl eu eleifend. sed vel arcu feugiat, lobortis ex quis, sagittis justo. cras finibus urna quis hendrerit gravida. donec laoreet, nisl in sagittis pellentesque, risus elit porttitor eros, vel tincidunt sem metus sollicitudin neque.',
      'curabitur eu scelerisque sem. nulla lacinia ante vitae pellentesque luctus. duis facilisis neque et enim suscipit hendrerit. proin ut vehicula ante, ac varius sem. pellentesque a suscipit nulla, porttitor auctor velit. integer dignissim massa ac nisl aliquam, ac pellentesque eros vehicula. nam at turpis enim. integer vel neque volutpat, auctor massa nec, ultrices quam. donec commodo leo in viverra scelerisque. nunc eu varius nisl.',
      'fusce neque massa, dapibus id maximus in, consectetur eu enim. nunc vel magna eu nunc malesuada ullamcorper. ut mollis auctor luctus. fusce eget nunc mi. aliquam erat volutpat. suspendisse mollis, nulla nec lobortis feugiat, ipsum eros laoreet arcu, sit amet dapibus ex magna vitae purus. in pharetra hendrerit rutrum. nunc faucibus felis diam, nec convallis purus fringilla porttitor. praesent eleifend sodales diam. sed augue magna, aliquet imperdiet magna et, vehicula egestas mi.',
      'nam vestibulum ullamcorper sem, ac sodales risus tincidunt a. pellentesque nec vulputate orci, non blandit neque. aliquam risus urna, efficitur quis mi sit amet, dictum blandit tortor. fusce justo nulla, semper at nunc eu, dignissim consectetur est. aliquam accumsan ante velit, vel laoreet augue aliquam vestibulum. phasellus mi arcu, congue vitae mi eget, eleifend volutpat odio. ut at gravida nibh, sed viverra libero. vestibulum sed gravida sem.',
      'aenean felis lorem, lacinia id varius at, posuere eget libero. in at tellus ut mauris facilisis fermentum. donec sed dignissim turpis. aliquam sit amet nunc nec orci dapibus sollicitudin. aliquam fringilla suscipit justo dignissim tincidunt. pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. aenean pretium et lorem in lobortis. in consequat lacus id suscipit tristique. nullam luctus molestie felis id auctor. aliquam at ex erat. fusce quis sollicitudin odio. integer convallis fringilla egestas. maecenas finibus sapien et aliquam luctus. nam porta elementum nunc, non mattis dui pulvinar eu. aenean in venenatis sapien.'
    ]
  },
  {
    name: 'pé grande no ifsp?!?',
    description: 'há rumores de que existe um pé grande na floresta do campus são carlos, fontes dizem que o bixo tem uma moto vrum vrum.',
    content: [
      '* texto pra encher linguiça *',
      'lorem ipsum dolor sit amet, consectetur adipiscing elit. praesent ullamcorper lorem at nunc consequat rutrum. morbi turpis enim, pretium a ex eget, condimentum hendrerit justo. proin et nibh in orci convallis malesuada. aenean lobortis vehicula magna, ac lobortis mauris. aliquam ante mi, tristique id mi eu, gravida tristique diam. nulla tempor ultrices enim eget interdum. sed ornare neque vel lectus suscipit imperdiet. nullam malesuada risus eu turpis lobortis vestibulum. pellentesque id nisl ante. aliquam dignissim mollis nisl eu eleifend. sed vel arcu feugiat, lobortis ex quis, sagittis justo. cras finibus urna quis hendrerit gravida. donec laoreet, nisl in sagittis pellentesque, risus elit porttitor eros, vel tincidunt sem metus sollicitudin neque.',
      'curabitur eu scelerisque sem. nulla lacinia ante vitae pellentesque luctus. duis facilisis neque et enim suscipit hendrerit. proin ut vehicula ante, ac varius sem. pellentesque a suscipit nulla, porttitor auctor velit. integer dignissim massa ac nisl aliquam, ac pellentesque eros vehicula. nam at turpis enim. integer vel neque volutpat, auctor massa nec, ultrices quam. donec commodo leo in viverra scelerisque. nunc eu varius nisl.',
      'fusce neque massa, dapibus id maximus in, consectetur eu enim. nunc vel magna eu nunc malesuada ullamcorper. ut mollis auctor luctus. fusce eget nunc mi. aliquam erat volutpat. suspendisse mollis, nulla nec lobortis feugiat, ipsum eros laoreet arcu, sit amet dapibus ex magna vitae purus. in pharetra hendrerit rutrum. nunc faucibus felis diam, nec convallis purus fringilla porttitor. praesent eleifend sodales diam. sed augue magna, aliquet imperdiet magna et, vehicula egestas mi.',
      'nam vestibulum ullamcorper sem, ac sodales risus tincidunt a. pellentesque nec vulputate orci, non blandit neque. aliquam risus urna, efficitur quis mi sit amet, dictum blandit tortor. fusce justo nulla, semper at nunc eu, dignissim consectetur est. aliquam accumsan ante velit, vel laoreet augue aliquam vestibulum. phasellus mi arcu, congue vitae mi eget, eleifend volutpat odio. ut at gravida nibh, sed viverra libero. vestibulum sed gravida sem.',
      'aenean felis lorem, lacinia id varius at, posuere eget libero. in at tellus ut mauris facilisis fermentum. donec sed dignissim turpis. aliquam sit amet nunc nec orci dapibus sollicitudin. aliquam fringilla suscipit justo dignissim tincidunt. pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. aenean pretium et lorem in lobortis. in consequat lacus id suscipit tristique. nullam luctus molestie felis id auctor. aliquam at ex erat. fusce quis sollicitudin odio. integer convallis fringilla egestas. maecenas finibus sapien et aliquam luctus. nam porta elementum nunc, non mattis dui pulvinar eu. aenean in venenatis sapien.'
    ]
  },
  {
    name: 'rinha de galo é maus-tratos ou liberdade?',
    description: 'hoje discutiremos se essa arte milenar que consiste na batalha de galináceos seria um tipo de mau-trato ou liberdade.',
    content: [
      '* texto pra encher linguiça *',
      'lorem ipsum dolor sit amet, consectetur adipiscing elit. praesent ullamcorper lorem at nunc consequat rutrum. morbi turpis enim, pretium a ex eget, condimentum hendrerit justo. proin et nibh in orci convallis malesuada. aenean lobortis vehicula magna, ac lobortis mauris. aliquam ante mi, tristique id mi eu, gravida tristique diam. nulla tempor ultrices enim eget interdum. sed ornare neque vel lectus suscipit imperdiet. nullam malesuada risus eu turpis lobortis vestibulum. pellentesque id nisl ante. aliquam dignissim mollis nisl eu eleifend. sed vel arcu feugiat, lobortis ex quis, sagittis justo. cras finibus urna quis hendrerit gravida. donec laoreet, nisl in sagittis pellentesque, risus elit porttitor eros, vel tincidunt sem metus sollicitudin neque.',
      'curabitur eu scelerisque sem. nulla lacinia ante vitae pellentesque luctus. duis facilisis neque et enim suscipit hendrerit. proin ut vehicula ante, ac varius sem. pellentesque a suscipit nulla, porttitor auctor velit. integer dignissim massa ac nisl aliquam, ac pellentesque eros vehicula. nam at turpis enim. integer vel neque volutpat, auctor massa nec, ultrices quam. donec commodo leo in viverra scelerisque. nunc eu varius nisl.',
      'fusce neque massa, dapibus id maximus in, consectetur eu enim. nunc vel magna eu nunc malesuada ullamcorper. ut mollis auctor luctus. fusce eget nunc mi. aliquam erat volutpat. suspendisse mollis, nulla nec lobortis feugiat, ipsum eros laoreet arcu, sit amet dapibus ex magna vitae purus. in pharetra hendrerit rutrum. nunc faucibus felis diam, nec convallis purus fringilla porttitor. praesent eleifend sodales diam. sed augue magna, aliquet imperdiet magna et, vehicula egestas mi.',
      'nam vestibulum ullamcorper sem, ac sodales risus tincidunt a. pellentesque nec vulputate orci, non blandit neque. aliquam risus urna, efficitur quis mi sit amet, dictum blandit tortor. fusce justo nulla, semper at nunc eu, dignissim consectetur est. aliquam accumsan ante velit, vel laoreet augue aliquam vestibulum. phasellus mi arcu, congue vitae mi eget, eleifend volutpat odio. ut at gravida nibh, sed viverra libero. vestibulum sed gravida sem.',
      'aenean felis lorem, lacinia id varius at, posuere eget libero. in at tellus ut mauris facilisis fermentum. donec sed dignissim turpis. aliquam sit amet nunc nec orci dapibus sollicitudin. aliquam fringilla suscipit justo dignissim tincidunt. pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. aenean pretium et lorem in lobortis. in consequat lacus id suscipit tristique. nullam luctus molestie felis id auctor. aliquam at ex erat. fusce quis sollicitudin odio. integer convallis fringilla egestas. maecenas finibus sapien et aliquam luctus. nam porta elementum nunc, non mattis dui pulvinar eu. aenean in venenatis sapien.'
    ]
  },
  {
    name: 'como programar em html tutorial 2018 atualizado 100% funcionando blogdolinguicinha.com.br',
    description: 'para programar em html, basta entrar neste link aqui: clonacartao.com',
    content: [
      '* texto pra encher linguiça *',
      'lorem ipsum dolor sit amet, consectetur adipiscing elit. praesent ullamcorper lorem at nunc consequat rutrum. morbi turpis enim, pretium a ex eget, condimentum hendrerit justo. proin et nibh in orci convallis malesuada. aenean lobortis vehicula magna, ac lobortis mauris. aliquam ante mi, tristique id mi eu, gravida tristique diam. nulla tempor ultrices enim eget interdum. sed ornare neque vel lectus suscipit imperdiet. nullam malesuada risus eu turpis lobortis vestibulum. pellentesque id nisl ante. aliquam dignissim mollis nisl eu eleifend. sed vel arcu feugiat, lobortis ex quis, sagittis justo. cras finibus urna quis hendrerit gravida. donec laoreet, nisl in sagittis pellentesque, risus elit porttitor eros, vel tincidunt sem metus sollicitudin neque.',
      'curabitur eu scelerisque sem. nulla lacinia ante vitae pellentesque luctus. duis facilisis neque et enim suscipit hendrerit. proin ut vehicula ante, ac varius sem. pellentesque a suscipit nulla, porttitor auctor velit. integer dignissim massa ac nisl aliquam, ac pellentesque eros vehicula. nam at turpis enim. integer vel neque volutpat, auctor massa nec, ultrices quam. donec commodo leo in viverra scelerisque. nunc eu varius nisl.',
      'fusce neque massa, dapibus id maximus in, consectetur eu enim. nunc vel magna eu nunc malesuada ullamcorper. ut mollis auctor luctus. fusce eget nunc mi. aliquam erat volutpat. suspendisse mollis, nulla nec lobortis feugiat, ipsum eros laoreet arcu, sit amet dapibus ex magna vitae purus. in pharetra hendrerit rutrum. nunc faucibus felis diam, nec convallis purus fringilla porttitor. praesent eleifend sodales diam. sed augue magna, aliquet imperdiet magna et, vehicula egestas mi.',
      'nam vestibulum ullamcorper sem, ac sodales risus tincidunt a. pellentesque nec vulputate orci, non blandit neque. aliquam risus urna, efficitur quis mi sit amet, dictum blandit tortor. fusce justo nulla, semper at nunc eu, dignissim consectetur est. aliquam accumsan ante velit, vel laoreet augue aliquam vestibulum. phasellus mi arcu, congue vitae mi eget, eleifend volutpat odio. ut at gravida nibh, sed viverra libero. vestibulum sed gravida sem.',
      'aenean felis lorem, lacinia id varius at, posuere eget libero. in at tellus ut mauris facilisis fermentum. donec sed dignissim turpis. aliquam sit amet nunc nec orci dapibus sollicitudin. aliquam fringilla suscipit justo dignissim tincidunt. pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. aenean pretium et lorem in lobortis. in consequat lacus id suscipit tristique. nullam luctus molestie felis id auctor. aliquam at ex erat. fusce quis sollicitudin odio. integer convallis fringilla egestas. maecenas finibus sapien et aliquam luctus. nam porta elementum nunc, non mattis dui pulvinar eu. aenean in venenatis sapien.'
    ]
  }
]

function showPost(index) {
  const post = new Post()

  post.addTag('h2', postArray[index].name)
  post.addTag('h3', postArray[index].description)
  postArray[index].content.forEach((text) => {
    post.addTag('p', text)
  })

  articleElement.innerHTML = post.toHTML()
}

postArray.forEach(({ name }, index) => {
  const postElement = document.createElement('li')
  postElement.textContent = name
  postElement.onclick = () => showPost(index)
  
  postList.append(postElement)
})

showPost(0)