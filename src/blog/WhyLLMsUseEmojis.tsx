import { getAssetPath } from '../utils'
import Navbar from '../components/Navbar'
export default function WhyLLMsUseEmojis() {
    return (
        <>
        <Navbar/>
        <article className="blog-post">
            <h2>Why Do LLMs Use Emojis?</h2>

            <section>
                <h3>Training Background</h3>
                <p>
                    First, we need to delve deeper into how exactly LLMs are trained. There exist three main steps:
                </p>

                <ol>
                    <li>
                        <strong>Pretraining:</strong> The "P" in GPT stands for pre-trained. The goal here is to predict
                        the next token in a given text:
                        <ul>
                            <li>
                                That is, minimize <a href="https://www.geeksforgeeks.org/machine-learning/what-is-cross-entropy-loss-function/" target="_blank" rel="noopener noreferrer">
                                    cross entropy loss
                                </a>, a measure of how close a model's responses are to the expected response, usually modeled
                                by tensors in an n-dimensional space. Here, the model is fed trillions (for large language models)
                                of tokens from the web, code, papers, books, etc. and evaluated on its accuracy over and over.
                            </li>
                            <li>
                                <strong>Output:</strong> A model that just learns statistical structure of language and facts by
                                compressing the data distribution. In layman's terms, a computationally expensive auto-complete bot.
                            </li>
                        </ul>
                    </li>

                    <li>
                        <strong>Supervised Fine Tuning:</strong> Show the model lots of prompt → ideal answer pairs written
                        by experts, then train it to imitate those ideal answers.
                        <ul>
                            <li>
                                This involves collecting such ideal Q/A examples, and having the model adjust its parameters such
                                that - when it sees an input, the next tokens it predicts line up with the target answer (on repeat).
                            </li>
                            <li>
                                <strong>Output:</strong> A model that responds to requests instead of just being able to continue
                                the last x tokens.
                            </li>
                        </ul>
                    </li>

                    <li>
                        <strong>Preference training:</strong> Someone sits down and chooses the outputs they like.
                        <ul>
                            <li>
                                For a prompt, sample two (or more) candidate answers from the model; human raters (or an
                                LLM-as-judge) pick which is better given detailed rubrics (helpful, harmless, honest, concise, etc.)
                                We may also train a reward model so it assigns higher scores to preferred answers.
                            </li>
                            <li>
                                <strong>My best guess:</strong> Here is where I suspect the emojis come in. Because, relative to all
                                of the content on the internet, emojis play quite a small portion. In fact, anecdotally, before LLMs,
                                I had never once seen emojis as bullet points, even in the most informal of writing environments.
                            </li>
                            <li>
                                So somewhere along the way, they made their way into the LLM, and this part of the training process
                                is <em>most</em> human focused.
                            </li>
                            <li>
                                <strong>Emojis as lists:</strong> This <a href="https://arxiv.org/abs/2409.11704" target="_blank" rel="noopener noreferrer">
                                    foundational paper
                                </a> does a great job of explaining the so-called "format" bias towards outputs containing lists, emojis,
                                bolded headers, etc. Anecdotally, all typical characteristics of LLM output.
                            </li>
                        </ul>
                    </li>
                </ol>

                <figure style={{ margin: '20px 0', textAlign: 'center' }}>
                    <img
                        src={getAssetPath('assets/blog-emojis/image2.png')}
                        alt="Format bias comparison chart"
                        style={{ maxWidth: '100%', height: 'auto' }}
                    />
                </figure>

                <p>
                    We see that when the format <em>changes</em>, the win rate for emoji-augmented responses over non emoji
                    responses is far greater.
                </p>

                <p>Since no one is fact checking me here, allow me to continue surmising.</p>
            </section>

            <section>
                <h3>The Universality Problem</h3>
                <p>
                    If you are unaware, now is a good time to mention that most capable, modern LLMs are trained in various
                    languages, with English making up their primary corpus. Again, speculation, but I believe that this may
                    also play a hand in overuse of emojis. If a model is expected to perform in all kinds of different
                    languages, it may result in emojis acting as some kind of universal language. For example, if sentiment
                    analysis for the skull (💀) emoji results in a mostly unambiguous feeling attached to it, then the model
                    might be significantly more likely to use that for such a sentiment, instead of trying to piece together
                    output from a training corpus of all x languages, as we have a universal language that is mostly understood
                    by all users easily attainable.
                </p>
            </section>

            <section>
                <h3>HCI Research</h3>
                <p>
                    HCI Research consistently shows us that emojis can express warmth, responsiveness, and satisfaction
                    reliant on the context of the situation of course. This <a href="http://journals.plos.org/plosone/article?id=10.1371/journal.pone.0326189" target="_blank" rel="noopener noreferrer">
                        interesting article
                    </a> shows that emojis in texts increase perceived responsiveness, which mediates closeness and relationship
                    satisfaction. Similarly, we can link emoji use in chatbots to "higher satisfaction" and a feeling of
                    human-like closeness. It follows that LLMs then, would trend towards using emojis than not, especially
                    considering point 3 above.
                </p>

                <p>
                    If LLMs are able to understand which emojis to use for a particular sentiment, (an emoji to vocabulary
                    mapping may exist) the "cost" of using one more emoji will <a href="https://arxiv.org/html/2409.10760v1" target="_blank" rel="noopener noreferrer">
                        rarely hurt the point it is making
                    </a>, and will sometimes even boost perceived warmth. Win-Win.
                </p>
            </section>

            <section>
                <h3>Tokenization</h3>
                <p>
                    What is "cost" to an LLM? Simply put, an LLM can only output so many tokens, and input so many tokens.
                    So, a naturally occurring reward function then, is to minimize the number of output tokens while keeping
                    what is called competence - what I'd define as the "point it is making."
                </p>

                <p>Consider then, a simple but extremely powerful example to wrap up:</p>

                <div style={{ display: 'flex', gap: '40px', margin: '40px 0', justifyContent: 'center', alignItems: 'center' }}>
                    <img
                        src={getAssetPath('assets/blog-emojis/image3.png')}
                        alt="Text without emoji example"
                        style={{ maxWidth: '400px', height: 'auto' }}
                    />
                    vs.
                    <img
                        src={getAssetPath('assets/blog-emojis/image1.png')}
                        alt="Text with emoji example"
                        style={{ maxWidth: '400px', height: 'auto' }}
                    />
                </div>

                <p>
                    <a href="https://platform.openai.com/tokenizer" target="_blank" rel="noopener noreferrer">
                        OpenAI's tokenizer
                    </a> to visualize the cost of an emoji vs the cost of a short sentence. This further exemplifies the idea that similar, sentiment based, information can be emitted with fewer tokens through emojis.
                </p>

                <p>
                    To end then, think about the idea that LLMs are nothing more than the amalgamation of complex statistical functions. We have tried to
                    show the intuition, from the LLM's point of view, for why these functions may result in such
                    (emoji-filled) output.
                </p>
            </section>
        </article>
        </>
    )
}
