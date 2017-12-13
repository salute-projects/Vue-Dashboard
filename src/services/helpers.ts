import { injectable } from 'inversify';
import { start } from 'repl';
import { clearTimeout, setTimeout } from 'timers';

@injectable()
export class HelpersService {
    getStateFullName(abbreviation: string): string {
        const target = this.states.find(t => t.abbreviation.toLowerCase() === abbreviation.toLowerCase());
        if (!target)
            return '';
        return target.name;
    }

    getStateAbbreviation(state: string): string {
        const target = this.states.find(t => t.name.toLowerCase() === state.toLowerCase());
        if (!target)
            return '';
        return target.abbreviation;
    }

    getAllStates()  {
        return this.states;
    }

    private states = [
        {
            'name': 'Alabama',
            'abbreviation': 'AL'
        },
        {
            'name': 'Alaska',
            'abbreviation': 'AK'
        },
        {
            'name': 'American Samoa',
            'abbreviation': 'AS'
        },
        {
            'name': 'Arizona',
            'abbreviation': 'AZ'
        },
        {
            'name': 'Arkansas',
            'abbreviation': 'AR'
        },
        {
            'name': 'California',
            'abbreviation': 'CA'
        },
        {
            'name': 'Colorado',
            'abbreviation': 'CO'
        },
        {
            'name': 'Connecticut',
            'abbreviation': 'CT'
        },
        {
            'name': 'Delaware',
            'abbreviation': 'DE'
        },
        {
            'name': 'District Of Columbia',
            'abbreviation': 'DC'
        },
        {
            'name': 'Federated States Of Micronesia',
            'abbreviation': 'FM'
        },
        {
            'name': 'Florida',
            'abbreviation': 'FL'
        },
        {
            'name': 'Georgia',
            'abbreviation': 'GA'
        },
        {
            'name': 'Guam',
            'abbreviation': 'GU'
        },
        {
            'name': 'Hawaii',
            'abbreviation': 'HI'
        },
        {
            'name': 'Idaho',
            'abbreviation': 'ID'
        },
        {
            'name': 'Illinois',
            'abbreviation': 'IL'
        },
        {
            'name': 'Indiana',
            'abbreviation': 'IN'
        },
        {
            'name': 'Iowa',
            'abbreviation': 'IA'
        },
        {
            'name': 'Kansas',
            'abbreviation': 'KS'
        },
        {
            'name': 'Kentucky',
            'abbreviation': 'KY'
        },
        {
            'name': 'Louisiana',
            'abbreviation': 'LA'
        },
        {
            'name': 'Maine',
            'abbreviation': 'ME'
        },
        {
            'name': 'Marshall Islands',
            'abbreviation': 'MH'
        },
        {
            'name': 'Maryland',
            'abbreviation': 'MD'
        },
        {
            'name': 'Massachusetts',
            'abbreviation': 'MA'
        },
        {
            'name': 'Michigan',
            'abbreviation': 'MI'
        },
        {
            'name': 'Minnesota',
            'abbreviation': 'MN'
        },
        {
            'name': 'Mississippi',
            'abbreviation': 'MS'
        },
        {
            'name': 'Missouri',
            'abbreviation': 'MO'
        },
        {
            'name': 'Montana',
            'abbreviation': 'MT'
        },
        {
            'name': 'Nebraska',
            'abbreviation': 'NE'
        },
        {
            'name': 'Nevada',
            'abbreviation': 'NV'
        },
        {
            'name': 'New Hampshire',
            'abbreviation': 'NH'
        },
        {
            'name': 'New Jersey',
            'abbreviation': 'NJ'
        },
        {
            'name': 'New Mexico',
            'abbreviation': 'NM'
        },
        {
            'name': 'New York',
            'abbreviation': 'NY'
        },
        {
            'name': 'North Carolina',
            'abbreviation': 'NC'
        },
        {
            'name': 'North Dakota',
            'abbreviation': 'ND'
        },
        {
            'name': 'Northern Mariana Islands',
            'abbreviation': 'MP'
        },
        {
            'name': 'Ohio',
            'abbreviation': 'OH'
        },
        {
            'name': 'Oklahoma',
            'abbreviation': 'OK'
        },
        {
            'name': 'Oregon',
            'abbreviation': 'OR'
        },
        {
            'name': 'Palau',
            'abbreviation': 'PW'
        },
        {
            'name': 'Pennsylvania',
            'abbreviation': 'PA'
        },
        {
            'name': 'Puerto Rico',
            'abbreviation': 'PR'
        },
        {
            'name': 'Rhode Island',
            'abbreviation': 'RI'
        },
        {
            'name': 'South Carolina',
            'abbreviation': 'SC'
        },
        {
            'name': 'South Dakota',
            'abbreviation': 'SD'
        },
        {
            'name': 'Tennessee',
            'abbreviation': 'TN'
        },
        {
            'name': 'Texas',
            'abbreviation': 'TX'
        },
        {
            'name': 'Utah',
            'abbreviation': 'UT'
        },
        {
            'name': 'Vermont',
            'abbreviation': 'VT'
        },
        {
            'name': 'Virgin Islands',
            'abbreviation': 'VI'
        },
        {
            'name': 'Virginia',
            'abbreviation': 'VA'
        },
        {
            'name': 'Washington',
            'abbreviation': 'WA'
        },
        {
            'name': 'West Virginia',
            'abbreviation': 'WV'
        },
        {
            'name': 'Wisconsin',
            'abbreviation': 'WI'
        },
        {
            'name': 'Wyoming',
            'abbreviation': 'WY'
        }
    ];

    debounce(func, delay = 300) {
        var timer = null;
        return function() {
            var context = this;
            var args = arguments;
            clearTimeout(timer);
            timer = setTimeout(() => { func.apply(this, args); }, delay)
        }
    }
}