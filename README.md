# jQuery Widget Factory Workshop

## Motivation: Familiarize devs with the underlying technology behind Q4 Widgets

Q4 widgets are currently built with jQuery's [Widget Factory](https://jqueryui.com/widget/). To better understand this technology, you will re-implement common features found in Q4 Widgets using a starter app as an example.

To start, run `npm i` and then `npm run start` and open localhost:1234.

## Tasks:
1. Pull Data from a Q4 API

    Sample Press Release Request: https://deltaclonesandbox.q4web.com/feed/PressRelease.svc/GetPressReleaseList?LanguageId=1&bodyType=0&pressReleaseDateFilter=3&categoryId=1cb807d2-208f-4bc3-9133-6a9ad45ac3b0&pageSize=-1&pageNumber=0&tagList=&includeTags=true&excludeSelection=1

    To see other APIs: [Q4 Web API Docs](http://documentation.q4websystems.com/home)


2. Render the pulled data with mustachejs. [Fiddle example](https://jsfiddle.net/bhaagmarway/a4e5yurb/40/)
3. Create a `beforeRender` and `Complete` option
    
    Ensure `beforeRender` can pass updated data to the render method

4. Add a `limit` option to render only x items max

5. Stretch Goal - Create a filter (by year, tag, etc) and allow user to re-render items based on filter

Styling is not expected
