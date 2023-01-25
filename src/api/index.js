import axios from "axios";

const BASE_URL = 'https://staging-api.bloobloom.com/user/v1/sales_channels/website/collections';

export const api = Object.freeze({
    async getCollections(selectedGlasses = 'spectacles-women', color = '', shape = '', page) {
        const data = {
            params: {
                width: 960,
                sort: {
                    type: 'collection_relations_position',
                    order: 'asc'
                },
                filters: {
                    lens_variant_prescriptions: 'fashion',
                    lens_variant_types: 'classic',
                    frame_variant_home_trial_available: false
                },
                page: {
                    limit: 12,
                    number: page
                }
            }
        }
        
        if(color) {
            data.params.filters.glass_variant_frame_variant_colour_tag_configuration_names = color
        }

        if(shape) {
            data.params.filters.glass_variant_frame_variant_frame_tag_configuration_names = shape
        }
        
        const response = await axios.get(`${BASE_URL}/${selectedGlasses}/glasses`, data);
        
        return response
    }
});