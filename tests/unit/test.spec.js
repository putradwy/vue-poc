import { mount } from '@vue/test-utils'
import MoviePreview from '@/components/Moviepreview.vue'
import MovieList from '@/components/Movielist.vue'

describe('Moviepreview.vue', () => {
  it('components should render', () => {
    const preview = {
        image: "Movie image",
        title: "Movie title",
        description: "Movie Descrtiption"
    }
    const wrapper = mount(MoviePreview, {
      props: preview
    })
    expect(wrapper.html()).toMatchSnapshot();
  })
})

describe('Movielist.vue', () => {
  it('components should render', () => {
    const lists = [
      {
        "title": "movie 1",
        "id": "1"
      },
      {
        "title": "movie 2",
        "id": "2"
      }
    ]
    const wrapper = mount(MovieList, {
      data() {
        return {
          lists,
          value: {
            id: "1"
          }
        }
      }
    })
    expect(wrapper.html()).toMatchSnapshot();
  })

  it("should movieList handle onClick", async () => {
    const lists = [
      {
        "title": "movie 1",
        "id": "1"
      },
      {
        "title": "movie 2",
        "id": "2"
      }
    ]
    const wrapper = mount(MovieList, {
      data() {
        return {
          lists,
          value: {
            id: "1"
          }
        }
      },
    })
    await wrapper.find("[id='item-2']").trigger("click");
    expect(wrapper.html()).toMatchSnapshot();
  });
})
