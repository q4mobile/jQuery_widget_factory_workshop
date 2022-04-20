var jquery = require('jquery')
window.$ = window.jQuery = jquery
require('jquery-ui-dist/jquery-ui.min.js')
var Mustache = require('mustache')

$(function () {
  $.widget('q4.newWidget', {
    options: {
      newsData: '',
      beforeRender: function () {},
      onDestroy: function () {
        console.log('The widget has been destroyed')
      },
    },

    // use ajax to call news endpoint and store data globally
    _create: function () {
      $.ajax({
        type: 'GET',
        url: 'https://deltaclonesandbox.q4web.com/feed/PressRelease.svc/GetPressReleaseList?LanguageId=1&bodyType=0&pressReleaseDateFilter=3&categoryId=1cb807d2-208f-4bc3-9133-6a9ad45ac3b0&pageSize=-1&pageNumber=0&tagList=&includeTags=true&excludeSelection=1',
        dataType: 'json',
      }).done((result) => {
        this.option({
          newsData: result.GetPressReleaseListResult,
        })
      })
    },

    // render data
    _render: function () {
      const data = this.options.newsData
      this._trigger('beforeRender')
      const tpl =
        '<ul>' +
        '{{#.}}' +
        '<li><a href="#">{{Headline}}</a></li>' +
        '{{/.}}' +
        '</ul>'

      const markup = Mustache.render(tpl, data)
      console.log('result in render', markup)
      $('#my-widget').html(markup)
    },

    _destroy: function () {},

    _setOption: function (key, value) {
      this._super(key, value)
      if (key === 'newsData') {
        this._render()
      }
    },

    _setOptions: function () {
      this._superApply(arguments)
    },
  })

  $('#my-widget').newWidget({
    beforeRender: function () {
      console.log('before render is working')
    },
  })
})
