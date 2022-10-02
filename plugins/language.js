export default (context, inject) => {
  inject('tt', (en, ru) => {
    if (context.app.i18n.locale === 'en') return en
    return ru
  })
}
