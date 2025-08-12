import { defineStore } from 'pinia'

interface BlogStats {
  views: number
  likes: number
  likedByUser: boolean
}

interface BlogStatsState {
  stats: Record<string, BlogStats>
}

export const useBlogStatsStore = defineStore('blogStats', {
  state: (): BlogStatsState => ({
    stats: {}
  }),

  getters: {
    getPostStats: (state) => (slug: string): BlogStats => {
      return state.stats[slug] || { views: 0, likes: 0, likedByUser: false }
    }
  },

  actions: {
    async loadStats() {
      // Load stats from localStorage on client side
      if (process.client) {
        const savedStats = localStorage.getItem('blog-stats')
        if (savedStats) {
          this.stats = JSON.parse(savedStats)
        }
      }
    },

    saveStats() {
      // Save stats to localStorage on client side
      if (process.client) {
        localStorage.setItem('blog-stats', JSON.stringify(this.stats))
      }
    },

    async incrementView(slug: string) {
      // Check if user has already viewed this post in current session
      const sessionKey = `viewed-${slug}`
      if (process.client && !sessionStorage.getItem(sessionKey)) {
        if (!this.stats[slug]) {
          this.stats[slug] = { views: 0, likes: 0, likedByUser: false }
        }
        
        this.stats[slug].views++
        this.saveStats()
        
        // Mark as viewed in current session
        sessionStorage.setItem(sessionKey, 'true')
        
        // Optional: Send to backend API
        try {
          await $fetch('/api/blog-stats/view', {
            method: 'POST',
            body: { slug }
          })
        } catch (error) {
          console.log('Backend view tracking not available:', error)
        }
      }
    },

    async toggleLike(slug: string) {
      if (!this.stats[slug]) {
        this.stats[slug] = { views: 0, likes: 0, likedByUser: false }
      }

      const wasLiked = this.stats[slug].likedByUser
      this.stats[slug].likedByUser = !wasLiked
      this.stats[slug].likes += wasLiked ? -1 : 1

      this.saveStats()

      // Optional: Send to backend API
      try {
        await $fetch('/api/blog-stats/like', {
          method: 'POST',
          body: { slug, action: wasLiked ? 'unlike' : 'like' }
        })
      } catch (error) {
        console.log('Backend like tracking not available:', error)
        // Revert on error
        this.stats[slug].likedByUser = wasLiked
        this.stats[slug].likes += wasLiked ? 1 : -1
        this.saveStats()
      }
    }
  }
})
