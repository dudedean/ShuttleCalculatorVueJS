<template>
    <div class="mt-2">

        <div class="row">
            <div class="col-12 col-xs-12 col-md-12 col-sm-12">
                <div class="card border-info mb-3">
                    <div class="card-header">Event Name</div>
                    <div class="card-body">
                        <h4 class="card-title">Info card title</h4>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="row">
            <div class="col-12 col-xs-12 col-md-12 col-sm-12">
                <div class="card border-info mb-3">
                    <div class="card-header">Players</div>
                    <div class="card-body">
                        <h4 class="card-title">Info card title</h4>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        </div>


    </div>    
</template>

<script>
export default {
    data() {
        return {
            events: [],
            event: {
                id: '',
                name: '',
                place: '',
                dateEvent: '',
                timeEvent: '',
                hall: '',
                shuttlecockfees: ''
            },
            event_id: '',
            pagination: {}
        }
    },
    created() {
        this.fetchEvents();
    },
    methods: {
        fetchEvents(page_url) {
            let vm = this;
            page_url = page_url || 'http://shuttlecalculator.test/api/events'
            this.axios.get(page_url)
            .then((response) => {
                this.events = response.data.data;
                vm.makePagination(response.data.meta, response.data.links);
            })
        },
        makePagination(meta,links) {
            let pagination = {
                current_page: meta.current_page,
                last_page: meta.last_page,
                next_page_url: links.next,
                prev_page_url: links.prev
            }

            this.pagination = pagination;
        }
    }
}
</script>
