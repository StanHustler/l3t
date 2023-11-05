export const Levels = [
    ['p', 'Primary School'],
    ['m', 'Middle School'],
    ['h', 'High School'],
    ['4', 'CET-4'],
    ['6', 'CET-6'],
    ['g', 'GRE 8000'],
    ['o', '∞']
]

export type LevelKey = (typeof Levels)[number][0]

export type WordInfo = {
    o: string
    l: LevelKey
    t: string
}

export type WordInfoMap = Record<string, WordInfo>

export type WordMap = Record<string, LevelKey>

export type WordContext = {
    url: string
    title: string
    text: string
    word: string
    timestamp: number
    favicon?: string
}

export type ContextMap = Record<string, WordContext[]>


export const invalidTags = [
    'SCRIPT',
    'STYLE',
    'BUTTON',
    'VIDEO',
    'SVG',
    'CODE',
    'NOSCRIPT',
    'NOFRAMES',
    'INPUT',
    'TEXTAREA',
    'ABBR',
    'AREA',
    'CODE',
    'PRE',
    'AUDIO',
    'VIDEO',
    'CANVAS',
    'HEAD',
    'MAP',
    'META',
    'OBJECT',
    'WH-ROOT'
]

declare global {
    interface Highlight extends Set<Range> {
        readonly priority: number
    }

    const Highlight: {
        prototype: Highlight
        new (...initialRanges: Array<Range>): Highlight
    }

    type HighlightRegistry = Map<string, Highlight>

    namespace CSS {
        const highlights: HighlightRegistry
    }
}

export type Word = {
    status : number,
    update_time : number,
}
export type Words = Record<string, Word>