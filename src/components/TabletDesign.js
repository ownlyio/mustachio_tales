import FlipPage from 'react-flip-page'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import ChapterPages from '../utils/chapters'
import './TabletDesign.css'

// chapter 1
import sagesRant from '../images/ch_1/page1-pic.png'
import chapter1Logo from '../images/ch_1/page2-pic.png'
import mustachioLogoFooter from '../images/ch_1/mustachio-logo-book.png'

// chapter 1 characters
import abracadoobie from '../images/ch_1/characters/abracadoobie.png'
import aster from '../images/ch_1/characters/aster.png'
import baconprince from '../images/ch_1/characters/baconprince.png'
import bandwip from '../images/ch_1/characters/bandwip.png'
import beelee from '../images/ch_1/characters/beelee.png'
import berry from '../images/ch_1/characters/berry.png'
import bug from '../images/ch_1/characters/bug.png'
import cairo from '../images/ch_1/characters/cairo.png'
import gamerboi from '../images/ch_1/characters/gamerboi.png'
import pulsar from '../images/ch_1/characters/pulsar.png'

// chapter 2 characters
import chapter2Logo from '../images/ch_2/chap2.png'

// chapter 2 characters
import candycane from '../images/ch_2/characters/candycane.png'
import candywitch from '../images/ch_2/characters/candywitch.png'
import carabaohead from '../images/ch_2/characters/carabaohead.png'
import carbon from '../images/ch_2/characters/carbon.png'
import caster from '../images/ch_2/characters/caster.png'
import catchawave from '../images/ch_2/characters/catchawave.png'
import cavewizard from '../images/ch_2/characters/cavewizard.png'
import climber from '../images/ch_2/characters/climber.png'
import rench from '../images/ch_2/characters/rench.png'
import shucks from '../images/ch_2/characters/shucks.png'

// chapter 3 images
import chapter3Logo from '../images/ch_3/chap3.png'

// chapter 3 characters
import candyfloss from '../images/ch_3/characters/candyfloss.png'
import doorkeeper from '../images/ch_3/characters/doorkeeper.png'
import dwinn from '../images/ch_3/characters/dwinn.png'
import eddiecrog from '../images/ch_3/characters/eddiecrog.png'
import evlguy from '../images/ch_3/characters/evlguy.png'
import farmer from '../images/ch_3/characters/farmer.png'
import faun from '../images/ch_3/characters/faun.png'
import frankiestan from '../images/ch_3/characters/frankiestan.png'
import frontline from '../images/ch_3/characters/frontline.png'
import verdantgreed from '../images/ch_3/characters/verdantgreed.png'

// chapter 4 images
import chapter4Logo from '../images/ch_3/chap3.png'

// chapter 4 characters
import darkknight from '../images/ch_4/characters/dark_knight.png'
import firecrackerjack from '../images/ch_4/characters/fire_cracker_jack.png'
import frosty from '../images/ch_4/characters/frosty.png'
import ghostclarence from '../images/ch_4/characters/ghost_clarence.png'
import ghostface from '../images/ch_4/characters/ghost_face.png'
import ghostprince from '../images/ch_4/characters/ghost_prince.png'
import ghost from '../images/ch_4/characters/ghost.png'
import grim from '../images/ch_4/characters/grim.png'
import kinghobgoblin from '../images/ch_4/characters/king_hobgoblin.png'
import turfywizard from '../images/ch_4/characters/turfy_wizard.png'

function TabletDesign({ socMedHandles, flipPage}) {
    const filterChapters = (arr, start, end = arr.length) => {
        return arr.filter(x => {
            return (x.id >= start && x.id <= end)
        })
    }

    return (
        <div className="d-none d-md-block d-lg-none">
            <FlipPage
                className="book"
                showTouchHint
                uncutPages
                orientation="vertical"
                animationDuration="1000"
                disableSwip="true"
                flipOnTouch="true"
                // pageBackground="transparent"
                responsive
                ref={(component) => { flipPage = component }}
            >
                <article className="page h-90vh">
                    <div className="page-cover-mobile h-90vh" style={{position: "relative"}}></div>
                </article>

                {/* Table of Contents */}
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start pt-4" style={{position: "relative"}}>
                        <h3 className="text-center text-2xl font-w-hermann w-hermann-semibold mb-5">Table of Contents</h3>
                        
                        {filterChapters(ChapterPages, 1, 18).map((x, k) => (
                            !x.subpage ? (
                                <div className="row tc-link" onClick={() => flipPage.gotoPage(x.pageIndexTab)} key={x.id}>
                                    <div className="col-7">
                                        <p className="font-w-hermann text-lg w-hermann-semibold mb-0">{x.title}</p>
                                    </div>
                                    <div className="col-5">
                                        <p className="text-right text-lg font-w-hermann w-hermann-semibold mb-0">{x.pageTab}</p>
                                    </div>
                                </div>
                            ) : (
                                <div className="row tc-link indent" onClick={() => flipPage.gotoPage(x.pageIndexTab)} key={x.id}>
                                    <div className="col-7">
                                        <p className="font-w-hermann w-hermann mb-0">{x.title}</p>
                                    </div>
                                    <div className="col-5">
                                        <p className="text-right font-w-hermann w-hermann mb-0">{x.pageTab}</p>
                                    </div>
                                </div>
                            )
                        ))}
                        
                        <p className="text-center text-xl font-w-hermann w-hermann-semibold-italic ch-footer mb-5">The Sages Rant</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start pt-4" style={{position: "relative"}}>
                        <h3 className="text-center text-2xl font-w-hermann w-hermann-semibold mb-5">Table of Contents</h3>
                        
                        {filterChapters(ChapterPages, 19).map((x, k) => (
                            !x.subpage ? (
                                <div className="row tc-link" onClick={() => flipPage.gotoPage(x.pageIndexTab)} key={x.id}>
                                    <div className="col-7">
                                        <p className="font-w-hermann text-lg w-hermann-semibold mb-0">{x.title}</p>
                                    </div>
                                    <div className="col-5">
                                        <p className="text-right text-lg font-w-hermann w-hermann-semibold mb-0">{x.pageTab}</p>
                                    </div>
                                </div>
                            ) : (
                                <div className="row tc-link indent" onClick={() => flipPage.gotoPage(x.pageIndexTab)} key={x.id}>
                                    <div className="col-7">
                                        <p className="font-w-hermann w-hermann mb-0">{x.title}</p>
                                    </div>
                                    <div className="col-5">
                                        <p className="text-right font-w-hermann w-hermann mb-0">{x.pageTab}</p>
                                    </div>
                                </div>
                            )
                        ))}
                        
                        <p className="text-center text-xl font-w-hermann w-hermann-semibold-italic ch-footer mb-5">The Sages Rant</p>
                    </div>
                </article>

                {/* Prologue */}
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <div className="w-1/3 mx-auto mt-5 mb-5">
                            <img className="w-100" src={sagesRant} alt="Prologue" />
                        </div>
                        <h3 className="text-center font-w-hermann w-hermann-semibold">Prologue</h3>
                        <p className="text-center text-xl font-w-hermann w-hermann-semibold-italic ch-footer mb-5">The Sages Rant</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Prologue</p>
                        <div className="w-1/4 mx-auto mt-3 mb-4 ">
                            <img className="w-100" src={chapter1Logo} alt="Prologue" />
                        </div>

                        {/* Stanzas */}
                        <div className="mb-3 content-mobile-inner">
                            <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">
                                <span className="text-5xl">O</span>, cried the angels with not a whisper heard for the gods have bestowed tales in a land of few words. Hidden in fog and wary seas. MustachioVerse, where the Mustachios feasted, a realm rich with secrets, folklores and many adventures yet to be had.
                            </p>
                        </div>
                        <div className="mb-3 content-mobile-inner">
                            <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">One among these mustachioed beings, fabled among the land and yet quite mysterious. He is the bearer of the Golden Mustache and keeper of the Grooming Kit, 9 artifacts, each one a wondrous gift or a curse. Probably.</p>
                        </div>
                        <div className="mb-3 content-mobile-inner">
                            <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">The Prospector as he is known. A valiant one whose exploits became legends! One can say moved mountains and changed the course of rivers.</p>
                        </div>                        

                        <p className="text-center font-w-hermann w-hermann-semibold-italic page-num">2</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Prologue</p>

                        {/* Stanzas */}
                        <div className="mt-3 content-mobile-wrap">
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">And now the voice to tell the tales of MustachioVerse. Just so happens portal to this curious land has opened.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">MustachioVerse beckons you!</p>
                            </div>
                        </div>

                        <div className="mb-5 ch-footer mustachio-logo-mobile-wrap">
                            <div className="w-1/6 mx-auto mustachio-logo-mobile">
                                <img className="w-100" src={mustachioLogoFooter} alt="Mustachio Logo" />
                            </div>
                        </div>
                    </div>
                </article>

                {/* Chapter 1 */}
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <div className="w-1/3 mx-auto mt-5 mb-5">
                            <img className="w-100" src={sagesRant} alt="Chapter 1" />
                        </div>
                        <p className="text-center text-xl font-w-hermann w-hermann-reg mb-2">CHAPTER 1</p>
                        <h3 className="text-center font-w-hermann w-hermann-semibold">The Inception</h3>
                        <p className="text-center text-xl font-w-hermann w-hermann-semibold-italic ch-footer mb-5">The Sages Rant</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Chapter 1: The Inception</p>
                        <div className="w-1/4 mx-auto mt-3 mb-4 ">
                            <img className="w-100" src={chapter1Logo} alt="Chapter 1" />
                        </div>

                        {/* Stanzas */}
                        <div className="mb-3 content-mobile-inner">
                            <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">
                                <span className="text-5xl">I</span>t is morning in MustachioVerse. Sun hidden in a heavy downpour. A strong wind blows the pouring water into a spray, masking what could be the smell of pine cones into a reminder of how soggy your clothes can be.
                            </p>
                        </div>
                        <div className="mb-3 content-mobile-inner">
                            <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">An epic time to start a quest if you ask a bored Mustachio. The great wind seemingly nudges a group of Mustachios to an old cave.</p>
                        </div>
                        <div className="mb-3 content-mobile-inner">
                            <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Alas! The old Bigode Cave glowed bright like fire in the winter. And so the young Mustachios, curious as they are, trudged the wet trail to see what the glow is all about.</p>
                        </div>
                        <div className="mb-3 content-mobile-inner">
                            <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">As they come upon the cave's mouth, they see the glow pulsating from behind the rocks. Half hidden with debris, they find the source of this immense glow. It looks like a book with light leaking out from cracks on the cover and the pages.</p>
                        </div>                        

                        <p className="text-center font-w-hermann w-hermann-semibold-italic page-num">5</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Chapter 1: The Inception</p>

                        {/* Stanzas */}
                        <div className="mt-3 content-mobile-wrap">
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">As the light dims, they see an aged journal, torn and beat up but shaking like it is charging up. It lights back up again. This time blasting an intense array of light and a booming sound that echoes around the cave. It sounds almost like a deep voice. An announcement as the different colored lights swirl into many interesting shapes. Dancing enchantingly fast and jovial. Then slows down, floats into a circular shape. A tunnel.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Abracadoobie with his staff, a deceitful distraction, heard an echo from a distance, smirking, ready for some action. As Bandwip showed deep interest in treasures and adventures, even Cairo, the great thief, lighted up like a candle in the darkness. With a snigger he said, “Ready or not, the next legend is upon us.” Eyes glazing as Berry, the high-pitched wild berry warrior, exclaimed “The coast is clear, now we’re ready for some more!”.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Gamer Boi, the avid video gamer, stopped dead in his tracks as he picked up The Lost Diary. “He who dared seek victory through audacious exploits”, it read. “Shall claim The Grooming Kit and Golden Mustache, some light years ahead.”</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">As Aster, the man on a moon mission, flipped over to the next sheet, it showed nine mysterious artifacts, marking nine impossible feats. Bacon Prince, the next ruler of the mouthwatering Breakfast Kingdom, also wanted to pitch in some of his egg and bacon wisdom.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Bug, the melancholic Mustachio, grinned from ear to ear. Now in such good spirits, for the first time in a hundred years! Delighted, Bee Lee jumped up and down in his bespoke yellow jumpsuit. “The time has come for me to depart for the wildest pursuit!”. And so Pulsar flapped his wings, beyond thrilled to fly, for the greatest mystery unsolved emerged and no Mustachio knows why.</p>
                            </div>
                        </div>

                        <p className="text-center font-w-hermann w-hermann-semibold-italic page-num">6</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Chapter 1: The Inception</p>

                        {/* Stanzas */}
                        <div className="mt-3 content-mobile-wrap">
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">The Sages Rant as the embossed text in the journal reads. The curious Mustachios find themselves engrossed in the torn up pages. As paints outlandish stories of their land. Of a Golden Mustache and magical artifacts. Quests! Their brains already buzzing in excitement as they dragged their horses and satchels and got ready the start of their own saga.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Ah, little did these youngsters know of the greatest adventures set before them. I know for they will follow my steps. I am The Prospector, and my tales will be your quest.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Mint your Mustachio now and enter the portal that will transport you to MustachioVerse!</p>
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">
                                    <a href="https://mustachioverse.com/">https://mustachioverse.com/</a>
                                </p>
                            </div>
                        </div>

                        <div className="mb-5 ch-footer mustachio-logo-mobile-wrap">
                            <div className="w-1/6 mx-auto mustachio-logo-mobile">
                                <img className="w-100" src={mustachioLogoFooter} alt="Mustachio Logo" />
                            </div>
                        </div>
                    </div>
                </article>

                {/* Chapter 1 Characters */}
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/4 mx-auto mb-3">
                            <img className="w-100" src={abracadoobie} alt="AbracaDoobie" />
                        </div>
                        <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="text-center text-3xl font-w-hermann w-hermann-ultrabold mb-4">AbracaDoobie</p>

                        <div className="px-2">
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Twas in Mustachioverse before magic was known,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">a man named Doobie existed.</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He does this weird stuff while moving his staff,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">like teleport things out of nowhere</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">No one knows, it is in his dark 'stache,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">where the magic came from and started</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The staff is a diversion — his deceitful distraction</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">to keep his mustache power a secret</p>
                            </div>
                            <div className="mb-0">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The other Mustachios scared of his magic,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">started calling him Abracadoobie.</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/4 mx-auto mb-3">
                            <img className="w-100" src={aster} alt="Aster" />
                        </div>
                        <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="text-center text-3xl font-w-hermann w-hermann-ultrabold mb-4">Aster</p>

                        <div className="px-2">
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Aster is a cool and secretive Mustachio</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">who like to tell others that she is on a mission</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">“What mission?” they ask,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">She wouldn’t give them an answer</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">When they keep pestering her</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">She’d say “It’s confidential and it would put them in danger”</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">She goes to the MOON, that’s all everyone knows</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">What she does there, that’s still a big question</p>
                            </div>
                            <div className="mb-0">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Maybe during a random day, the Mustachioverse will find</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">What MOON stands for, it will surely blow their mind</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/4 mx-auto mb-3">
                            <img className="w-100" src={baconprince} alt="Bacon Prince" />
                        </div>
                        <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="text-center text-3xl font-w-hermann w-hermann-ultrabold mb-4">Bacon Prince</p>

                        <div className="px-2">
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The bacon prince is one who likes to brag,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">“I’m the next ruler of breakfast kingdom” while he waved their flag</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The prince is an only child and he is smart,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">But sometimes his humor is off and quite dark.</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He’ll ask visitors how they like to cook their eggs,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">If they answered wrong, he’ll jokingly ask the guard to take their head</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">That makes bacon prince a bit of a loner,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">For making good jokes, he has yet to master</p>
                            </div>
                            <div className="mb-0">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He might have everything but there’s one thing he wish for,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">A friend he can laugh with his darkest humor</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/4 mx-auto mb-3">
                            <img className="w-100" src={bandwip} alt="Bandwip" />
                        </div>
                        <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="text-center text-3xl font-w-hermann w-hermann-ultrabold mb-4">Bandwip</p>

                        <div className="px-2">
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The bandit stays in taverns</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">While drinking something fancy</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He’s waiting to hear stories of treasures,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Of golden chests, diamonds, pears, and rubies</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He wants some dangerous adventures,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">A chance to slash someone evil with his broad sword</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Everyone fears him because of he has two large horns,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">They think to be a Samurai is the reason he is born</p>
                            </div>
                            <div className="mb-0">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">They do not know having an animal sanctuary is his ultimate wish</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Use all the gold he stole to for dogs, alpacas, and his favorite fish</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/4 mx-auto mb-3">
                            <img className="w-100" src={beelee} alt="Bee Lee" />
                        </div>
                        <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="text-center text-3xl font-w-hermann w-hermann-ultrabold mb-4">Bee Lee</p>

                        <div className="px-2">
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">On the highest mountain top, a Mustachio is born</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">She is of royalty, descendant from Bee</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">She only wears jumpsuit in yellow and black,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Complains that royal outfits are very uncomfy and hurts her back</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Bee Lee’s been training herself for several years,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">To control other bees because someday she’ll be their queen</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">She looks so innocent but don’t mess with her,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">This girl’s fully capable of Mustachio murder</p>
                            </div>
                            <div className="mb-0">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">A bit unstable but who can complain,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">She’s top-tier Mustachio pretty and worth all the pain</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/4 mx-auto mb-3">
                            <img className="w-100" src={berry} alt="Berry" />
                        </div>
                        <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="text-center text-3xl font-w-hermann w-hermann-ultrabold mb-4">Berry</p>

                        <div className="px-2">
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">There’s this Mustachio whose hair resembles fire,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Whose Karate skills can make you scream and cry</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">With her high-pitched voice,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">she’ll make your ears bleed</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">When she sing you songs, you can’t complain</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Or else she’ll make sure you can’t talk ever again</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">People are always cautious when she’s around,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">They’re wary of the bad girl who is self-crowned</p>
                            </div>
                            <div className="mb-0">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Her original name was actually little cherry,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">But she made everyone call her beautiful wild berry</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/4 mx-auto mb-3">
                            <img className="w-100" src={bug} alt="Bug" />
                        </div>
                        <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="text-center text-3xl font-w-hermann w-hermann-ultrabold mb-4">Bug</p>

                        <div className="px-2">
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Bug was one melancholic Mustachio,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">who feels everyday is kind of a drag</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He has depression and anxiety,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">But he thinks that he is just born sad</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He said he heard some buzzing in his head,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">“It’s just your mind and imagination” they said</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He know’s it’s real, he’s not making it up</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">But no one seems to listen</p>
                            </div>
                            <div className="mb-0">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">“One day”, he said “someone will understand”</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">“I won’t be lonely; I’ll be genuinely glad”</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/4 mx-auto mb-3">
                            <img className="w-100" src={cairo} alt="Cairo" />
                        </div>
                        <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="text-center text-3xl font-w-hermann w-hermann-ultrabold mb-4">Cairo</p>

                        <div className="px-2">
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Cairo was a bit of a klepto</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Who had four eyes and lives in the Metro</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He likes to steal things that aren’t his</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Without making everyone feel that something’s amiss</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Cairo knows he is a master thief</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Can never be caught by the Mustachio chief</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">If you like something to stolen,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">You need to prepare him a generous fee</p>
                            </div>
                            <div className="mb-0">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Where did he learns his skills, that you might wonder</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He grew up on the streets and was taught by his Father</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/4 mx-auto mb-3">
                            <img className="w-100" src={gamerboi} alt="Gamer Boi" />
                        </div>
                        <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="text-center text-3xl font-w-hermann w-hermann-ultrabold mb-4">Gamer Boi</p>

                        <div className="px-2">
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The pied piper said Gamer Boi came from an old rusty computer,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">His tale of existence is much of a questionable order</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">His mother asked for child through every night in a prayer</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">“Almighty, give me a son, take whatever you want”</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Then the next day a baby appeared,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">But weirdly enough, her old computer is gone.</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The child has a large monitor on his head,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He made beeping sounds while he sleeps on his bed</p>
                            </div>
                            <div className="mb-0">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He loved video games and he always win</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Except for his social skills – is quite missing, that’s the thing</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/4 mx-auto mb-3">
                            <img className="w-100" src={pulsar} alt="Pulsar" />
                        </div>
                        <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="text-center text-3xl font-w-hermann w-hermann-ultrabold mb-4">Pulsar</p>

                        <div className="px-2">
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Tales have been told about the space angel’s origin,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Songs have been sung about myths where he began,</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Many have tried to ask this Mustachio where he came from,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">“The Third Heavens” he said as he began to describe the realm</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He said beyond MustachioVerse exists another place,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">where stars feel closer and things float in infinite space,</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Many believed that’s why he has wings,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">To fly and explore, try to discover things</p>
                            </div>
                            <div className="mb-0">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He is almost perfect and everyone treated him well,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Believing later on, he is some kind of “god” and not just an angel</p>
                            </div>
                        </div>
                    </div>
                </article>

                {/* Chapter 2 */}
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <div className="w-1/3 mx-auto mt-5 mb-5">
                            <img className="w-100" src={sagesRant} alt="Chapter 2" />
                        </div>
                        <p className="text-center text-xl font-w-hermann w-hermann-reg mb-2">CHAPTER 2</p>
                        <h3 className="text-center font-w-hermann w-hermann-semibold">The Blade at Fellowcro</h3>
                        <p className="text-center text-xl font-w-hermann w-hermann-semibold-italic ch-footer mb-5">The Sages Rant</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Chapter 2: The Blade at Fellowcro</p>
                        <div className="w-1/4 mx-auto mt-3 mb-4 ">
                            <img className="w-100" src={chapter2Logo} alt="Chapter 2" />
                        </div>

                        {/* Stanzas */}
                        <div className="mb-3 content-mobile-inner">
                            <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">
                                <span className="text-5xl">S</span>ome very few days after the discovery of The Sages Rant, talks of the Prospector’s adventures buzz among the tongues of the citizens of MustachioVerse. How much truth is lost in his disappearance. And how much fantasy can be refuted by the journal.
                            </p>
                        </div>
                        <div className="mb-3 content-mobile-inner">
                            <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">But what reigns in the hearts of the young Mustachios is the curiosity of where the stories of the journal lead. What power does the artifacts hold? To be the bearer of the Golden Mustache and keeper of the Grooming Kit.</p>
                        </div>
                        <div className="mb-3 content-mobile-inner">
                            <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">The youngsters begin to seek for the artifacts. One group comes to the mouth of Fellowcro Forest. The arching, gnarled, and twisted black trees that line the edge of the forest bodes a dark and treacherous trek if one even has the courage to enter.</p>
                        </div>
                        <div className="mb-3 content-mobile-inner">
                            <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Guided by the clues and descriptions left by The Prospector, The Mustachios enter the forest with calm minds and sharp senses. That at least is needed for the trail that leads them to the belly of a beast.</p>
                        </div>                        

                        <p className="text-center font-w-hermann w-hermann-semibold-italic page-num">19</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Chapter 2: The Blade at Fellowcro</p>

                        {/* Stanzas */}
                        <div className="mt-3 content-mobile-wrap">
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">It must be nearing sunset outside the forest's eternal night. The groups continue their hike into trails of the forest. Except for snarls and stares of creatures prowling behind the seemingly conscious overgrowth, nothing much exciting came along the way of the Mustachios. Safety in numbers, maybe.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">When suddenly a shrill scream breaks the thick forest air. In a rush of adrenaline, the young Mustachios leapt into action, searching for the source of the sound. Running and jumping through the branches and roots that came alive closing in on them, wanting to bind and crush. But the Mustachios are wily and athletic, they came upon a clearing where the plants weren’t able to follow them.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">The scream goes off again, louder this time for right in front of them they see it. Bewilderment painted the faces of the Mustachios for this is not in the book.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Shining atop a pile of wriggling vines, The Cutlass’ thin sharp edge gleams as it dances and cuts through the vines as they try to constrict the artifact. Almost sentient, the vines scream with each cut. And sentient they are as they feel the presence of the Mustachios and creep slowly as vines do but without the intention of letting anyone leave the clearing.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">How will the Mustachios get The Cutlass?</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Cave Wizard, who inhabits the area beneath the rocks of a cliff, had experience guarding a magical space. He said to the Mustachios, “There must be some sort of riddle, so any of us could go on and get the razor.”</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">So Candy Witch, with her spells that can make any dessert, along with Shucks, who looks the opposite of his personality, told the Mustachios to gather and put their heads together.</p>
                            </div>
                        </div>

                        <p className="text-center font-w-hermann w-hermann-semibold-italic page-num">20</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Chapter 2: The Blade at Fellowcro</p>

                        {/* Stanzas */}
                        <div className="mt-3 content-mobile-wrap">
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">They all glanced over Rench, a knight best known for his clever strategies and a tactician who can defeat any enemies. “But what am I to do?” Rench said. “I love war but this is another quest. It may not be military, but I’m always up for a game.”</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Climber smirked and said, “We can climb the trees and jump from one to another.” A man of great altitude, he aims to be. He looked at each Mustachio and said, “This one’s quite a daring challenge, no one will dare but me.”</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Catch-A-Wave, who was used to plot vengeance for his dear family who died in a spacecraft anomaly, thought to himself, “This is the right time for me to show everyone who’s the child of the sea.”</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">And so Caster, the spell-expert, lifted his wand. “Fellowcro Forest, show us your hand.”  Constellations light up the forest canopy and form into a set of words, a riddle to get the cutlass.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">A true Mustachio of ancient rituals, CarabaoHead, started shaking his body while chanting words of dread, while Carbon, a humanoid fighting against evil, was debating whether he could come up with something partly evil.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Candy Cane, with her hair so white and her shirt so big, had this power unbeknownst to the other Mustachios. She can hypnotize them to sleep, and to buy her more time, that’s what she did.</p>
                            </div>
                        </div>

                        <p className="text-center font-w-hermann w-hermann-semibold-italic page-num">21</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Chapter 2: The Blade at Fellowcro</p>

                        {/* Stanzas */}
                        <div className="mt-3 content-mobile-wrap">
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">The riddle from the sky says:</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold-italic mb-0">This famous pirate looks scruffy</p>
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold-italic mb-0">As he doesn’t seem to have shaved</p>
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold-italic mb-0">By not buying razors</p>
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold-italic mb-0">Lots of money he must have saved</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Will you be the first and only Mustachio to solve this riddle and get The Cutlass?</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Mint your Mustachio now and enter the portal that will transport you to MustachioVerse!</p>
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">
                                    <a href="https://mustachioverse.com/">https://mustachioverse.com/</a>
                                </p>
                            </div>
                        </div>

                        <div className="mb-5 ch-footer mustachio-logo-mobile-wrap">
                            <div className="w-1/6 mx-auto mustachio-logo-mobile">
                                <img className="w-100" src={mustachioLogoFooter} alt="Mustachio Logo" />
                            </div>
                        </div>
                    </div>
                </article>

                {/* Chapter 2 Characters */}
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/4 mx-auto mb-3">
                            <img className="w-100" src={candycane} alt="Candy Cane" />
                        </div>
                        <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="text-center text-3xl font-w-hermann w-hermann-ultrabold mb-4">Candy Cane</p>

                        <div className="px-2">
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">This girl is the definition of someone weird</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">With hair so white and shirts so big</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Sometimes she goes to a concert just to scream</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">After that she’ll devour a big tub of ice cream</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Candy Cane is irony personified</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">With emotions overflowing like a tide</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">She likes the sweetest candies and saddest songs</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Loves heavy rock music and wants a pet unicorn</p>
                            </div>
                            <div className="mb-0">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Yet beware, her eyes can hypnotize you to sleep</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">You’ll have a deep slumber that’ll last more than a week</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/4 mx-auto mb-3">
                            <img className="w-100" src={candywitch} alt="Candy Witch" />
                        </div>
                        <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="text-center text-3xl font-w-hermann w-hermann-ultrabold mb-4">Candy Witch</p>

                        <div className="px-2">
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Candy Witch is popular with many children</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">She is to them an angel, their sweet haven</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">With her spells she can make any dessert</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Cakes, cookies, you name it – she’s the sweet tooth expert</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">She flies with her chocolate broom</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">While sprinkling delectable goodies</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">A trail of pink candies is the sign</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Candy Witch here you’ll find</p>
                            </div>
                            <div className="mb-0">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">However, no one knows, this Mustachios diabetic</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">And even loved many, she’s her own worst critic</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/4 mx-auto mb-3">
                            <img className="w-100" src={carabaohead} alt="CarabaoHead" />
                        </div>
                        <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="text-center text-3xl font-w-hermann w-hermann-ultrabold mb-4">CarabaoHead</p>

                        <div className="px-2">
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">A Mustachio of ancient rituals is CarabaoHead</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He shakes his body while chanting words of dread</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He speaks these words while dancing</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">“existing, living, two different thing”</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He milks his headdress everyday</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">To get some money to learn ballet</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He was orphan who didn’t know his parents</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Only knows he can produce milk with his headdress</p>
                            </div>
                            <div className="mb-0">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Although this mustached being is confused about his identity</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He promised to be the greatest dancer throughout Mustacheternity</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/4 mx-auto mb-3">
                            <img className="w-100" src={carbon} alt="Carbon" />
                        </div>
                        <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="text-center text-3xl font-w-hermann w-hermann-ultrabold mb-4">Carbon</p>

                        <div className="px-2">
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Carbon is literally more human than others</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Because He is a humanoid fighting against evil</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Legend says he killed more than a thousand</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Throughout space he is known by everyone</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Is he a good Mustachio? That’s still debatable</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Probably cause he’s also partly evil</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Carbon thinks there should be no exceptions</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Even to the slightest offensive allegations</p>
                            </div>
                            <div className="mb-0">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Some says his ways for punishment is a questionable matter</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">But monsters can only be extinguished by another monster</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/4 mx-auto mb-3">
                            <img className="w-100" src={caster} alt="Caster" />
                        </div>
                        <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="text-center text-3xl font-w-hermann w-hermann-ultrabold mb-4">Caster</p>

                        <div className="px-2">
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Caster have always been popular in his class</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">There is no spell he cannot cast</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">A bit of a bully who's lost in his ways</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">But one day he found a girl in a garden maze</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He fell in love the first moment he saw her</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He told himself this one is not like any other</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He fixed his life to win “the one”</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">But before he talked to her, she was gone</p>
                            </div>
                            <div className="mb-0">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Although uncool, he asked everyone for clues</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">And so began, his life-long Mustachio cruise</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/4 mx-auto mb-3">
                            <img className="w-100" src={catchawave} alt="Catch A Wave" />
                        </div>
                        <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="text-center text-3xl font-w-hermann w-hermann-ultrabold mb-4">Catch A Wave</p>

                        <div className="px-2">
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Catch-A-Wave was only his nickname</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">A great surfer with money, looks, and fame</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He is a child of the sea,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">And calls the sun his mother</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">But really his family died in a terrible disaster</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Some spacecraft anomaly, that’s what he remembers</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He pretends his memories are gone, that he doesn’t know</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Someone caused their spaceship to blow</p>
                            </div>
                            <div className="mb-0">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He is plotting for vengeance since he was ten</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">“At the right time dear self” he said “Be patient Ben”</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/4 mx-auto mb-3">
                            <img className="w-100" src={cavewizard} alt="Cave Wizard" />
                        </div>
                        <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="text-center text-3xl font-w-hermann w-hermann-ultrabold mb-4">Cave Wizard</p>

                        <div className="px-2">
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The Cave Wizard guards a hidden cave</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">A pathway to an alternate reality his forefathers made</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He inhabits the area beneath the rocks of a cliff,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">with his red glowing wizard staff that he likes to whiff</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Why does he do that, well it’s his way</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Of making himself look crazy, of scaring people away</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He knows it’s important he doesn’t let anyone know,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">That a secret place exists, an area made of rainbow</p>
                            </div>
                            <div className="mb-0">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He is the keeper of the cave, the man in charge</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Until a strong Mustachio stood in front of the cave door and tried to barge.</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/4 mx-auto mb-3">
                            <img className="w-100" src={climber} alt="Climber" />
                        </div>
                        <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="text-center text-3xl font-w-hermann w-hermann-ultrabold mb-4">Climber</p>

                        <div className="px-2">
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The climber is one insecure man who is a bit wacko</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Because compared to everyone, he’s the shortest Mustachio</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He wants to climb the highest mountains to compensate for his height</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">“Taller than everyone, I’ll be the proudest person in sight”</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">A man of great altitude he aims to be</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Thousands of kilometers above the sea</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">His commitment and dedication to pursue his dream</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Made him the strongest climber even on places that are too extreme</p>
                            </div>
                            <div className="mb-0">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He almost lost a limb on one perilous mountain trail,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">“Well, this one’s quite a daring challenge” he says “no one will dare”</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/4 mx-auto mb-3">
                            <img className="w-100" src={rench} alt="Rench" />
                        </div>
                        <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="text-center text-3xl font-w-hermann w-hermann-ultrabold mb-4">Rench</p>

                        <div className="px-2">
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">A knight was known for clever strategies</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">A tactician who can defeat any enemies</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Rench is this Mustachios’ name,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">And battles are his favorite game</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He is a soldier since he was still child</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">No one knows the last time he smiled</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Trained all his life, wars are all he lived for</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Never knew outside military, there’s so much more</p>
                            </div>
                            <div className="mb-0">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He has a routine that he never breaks</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Until one dawn when many lives are at stake</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/4 mx-auto mb-3">
                            <img className="w-100" src={shucks} alt="Shucks" />
                        </div>
                        <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="text-center text-3xl font-w-hermann w-hermann-ultrabold mb-4">Shucks</p>

                        <div className="px-2">
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Shucks looks like someone out of a horror movie</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">With a scar that makes him pretty damn scary</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">But beneath the imperfect skin,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Is a heart that's kind and glows within</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">It's true he loves real crime documentaries</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">And he doesn't flinch when movie scenes go murdery</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">But that doesn't mean that he's a serial killer</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">This Mustachio will treat you well more than any other</p>
                            </div>
                            <div className="mb-0">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">In spite of being bullied all his life</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Shucks kept being kind and won’t start a fight</p>
                            </div>
                        </div>
                    </div>
                </article>

                {/* Chapter 3 */}
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <div className="w-1/3 mx-auto mt-5 mb-5">
                            <img className="w-100" src={sagesRant} alt="Chapter 3" />
                        </div>
                        <p className="text-center text-xl font-w-hermann w-hermann-reg mb-2">CHAPTER 3</p>
                        <h3 className="text-center font-w-hermann w-hermann-semibold">Red, White, and Blue</h3>
                        <p className="text-center text-xl font-w-hermann w-hermann-semibold-italic ch-footer mb-5">The Sages Rant</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Chapter 3: Red, White, and Blue</p>
                        <div className="w-1/4 mx-auto mt-3 mb-4 ">
                            <img className="w-100" src={chapter3Logo} alt="Chapter 3" />
                        </div>

                        {/* Stanzas */}
                        <div className="mb-3 px-4">
                            <p className="text-center font-w-hermann w-hermann-semibold mb-0">
                                <span className="text-5xl">T</span>he Mustachios are now out of the forest, but what lies ahead is another place, a location with trails of different directions. Exploring this massive area with confusion, they found an old rusty sign saying:
                            </p>
                        </div>
                        <div className="mb-3 px-4">
                            <p className="text-center font-w-hermann w-hermann-italic mb-0">“Grass Grin Maze:</p>
                            <p className="text-center font-w-hermann w-hermann-italic mb-0">where you can be completely lost</p>
                            <p className="text-center font-w-hermann w-hermann-italic mb-0">unless you’ll find something of red, blue, and white</p>
                            <p className="text-center font-w-hermann w-hermann-italic mb-0">that can be your forever light.”</p>
                        </div>
                        <div className="mb-3 px-4">
                            <p className="text-center font-w-hermann w-hermann-semibold mb-0">The Mustachios then decided to stick together, terrified that in every turn, some ferocious animal would jump out. They took a left turn, and then two rights. A scarecrow dressed as a snowman pops out. Scared yet motivated to get out of this terrifyingly vast area, they touch the weird scarecrow. One Mustachio even said hello. Nothing but silence followed. There’s no one else but them.</p>
                        </div>                        

                        <p className="text-center font-w-hermann w-hermann-semibold-italic page-num">34</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Chapter 3: Red, White, and Blue</p>

                        {/* Stanzas */}
                        <div className="mt-3 px-4">
                            <div className="mb-3">
                                <p className="text-center font-w-hermann w-hermann-semibold mb-0">A scarecrow dressed as a snowman pops out. Scared yet motivated to get out of this terrifyingly vast area, they touch the weird scarecrow. One Mustachio even said hello. Nothing but silence followed. There’s no one else but them.</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center font-w-hermann w-hermann-semibold mb-0">Inside of the scarecrow’s pocket lies a riddle:</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center font-w-hermann w-hermann-italic mb-0">“you can always run in circles</p>
                                <p className="text-center font-w-hermann w-hermann-italic mb-0">but the only way is through,</p>
                                <p className="text-center font-w-hermann w-hermann-italic mb-0">and lucky is the man</p>
                                <p className="text-center font-w-hermann w-hermann-italic mb-0">whose sunlight touches you.”</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center font-w-hermann w-hermann-semibold mb-0">After several attempts to interpret the puzzle, they finally discovered what it meant. Straight ahead, they went through a vine that led to the heart of the maze. Flowers of all kinds and gold-gilded porches, statues, and fountains are found in the area. It almost feels like an ethereal paradise. Their weary bodies and minds found relief in an environment that is the opposite of the dark, bushy chaos that is only ten steps away. It’s a place of serenity and for a minute, they are in awe.</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center font-w-hermann w-hermann-semibold mb-0">The sunlight is fading and so it begins. They started to keep looking. They moved every porch and even swam in the fountains, but nothing happened. A statue whose entirety is covered in moss seems to be familiar. “Aha!” said one Mustachio. “This one looks like the Prospector.” So the ten of them cleaned the statue until it shined, and when the last ray of sunlight hit its mustache, a bright lamp appeared out of its heart. This is the Lamp of Direction!</p>
                            </div>
                        </div>                        

                        <p className="text-center font-w-hermann w-hermann-semibold-italic page-num">35</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Chapter 3: Red, White, and Blue</p>

                        {/* Stanzas */}
                        <div className="mt-3 px-4">
                            <div className="mb-3">
                                <p className="text-center font-w-hermann w-hermann-semibold mb-0">Door Keeper, the Mustachio who can teleport to different places in a second, was astounded. “A barber pole! And not just a barber pole, but one that can show us which direction we should go next!”</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center font-w-hermann w-hermann-semibold mb-0">Looking as green as the grass in the Grass Grin Maze, Verdant Greed, as greedy as he was, wanted to make the Lamp of Direction his own. And so he plotted and plotted, until EVL Guy stopped him in his thoughts.</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center font-w-hermann w-hermann-semibold mb-0">As wicked as his name is, EVL Guy is the darkest magician in the land, who is used to playing with fate. “Oh brother, no wonder you’re silent. I can read your thoughts. Now I may like playing with dark magic but sharing the excitement makes the journey even better.”</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center font-w-hermann w-hermann-semibold mb-0">And so the Farmer, the most hardworking one, told the Mustachios to not waste any more second contemplating for an answer, as he still needs to go into the field when dawn arrives.</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center font-w-hermann w-hermann-semibold mb-0">Now, see, Faun loves to play hide and seek behind the trees. So just being in the Grass Grin Maze is enough, and finding the lamp was even better. He was jumping up and down, all giddied up when Dwinn, the adventurer who loves to win, stomped his feet.</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center font-w-hermann w-hermann-semibold mb-0">Everyone went silent. “Where do we begin?” As competitive as he is, losing was not an option. And Dwinn knows that the more they spend talking, the longer they’ll stay there.</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center font-w-hermann w-hermann-semibold mb-0">Frankie Stan, the shadow behind the genius, the one they call sinister, suddenly made a noise. “How about we ask the all-knowing Prospector? I’m sure he’s listening.”</p>
                            </div>
                        </div>                       

                        <p className="text-center font-w-hermann w-hermann-semibold-italic page-num">36</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Chapter 3: Red, White, and Blue</p>

                        {/* Stanzas */}
                        <div className="mt-3 px-4">
                            <div className="mb-3">
                                <p className="text-center font-w-hermann w-hermann-semibold mb-0">So Eddie Crog, the scary-looking one with blood on his face, suspiciously called everyone over to huddle. They wouldn’t budge until Frontline stepped up and scooched over.</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center font-w-hermann w-hermann-semibold mb-0">Together they chanted for enlightenment until the Lamp of Direction stopped spinning. They waited and waited, until it started again. This time, all the colors were moving in the same direction, and glowing lights of red, white, and blue came out of the barber pole and guided them towards their next artifact.</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center font-w-hermann w-hermann-semibold mb-0">Will you be the first and only Mustachio to solve this riddle and get The Lamp of Direction?</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center font-w-hermann w-hermann-semibold mb-0">Mint your Mustachio now and enter the portal that will transport you to MustachioVerse!</p>
                                <p className="text-center font-w-hermann w-hermann-semibold mb-0">
                                    <a href="https://mustachioverse.com/">https://mustachioverse.com/</a>
                                </p>
                            </div>
                        </div>                       

                        <div className="mb-5 ch-footer mustachio-logo-mobile-wrap">
                            <div className="w-1/6 mx-auto mustachio-logo-mobile">
                                <img className="w-100" src={mustachioLogoFooter} alt="Mustachio Logo" />
                            </div>
                        </div>
                    </div>
                </article>

                {/* Chapter 3 Characters */}
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/4 mx-auto mb-3">
                            <img className="w-100" src={candyfloss} alt="Candy Floss" />
                        </div>
                        <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="text-center text-3xl font-w-hermann w-hermann-ultrabold mb-4">Candy Floss</p>

                        <div className="px-2">
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Tweaved from sweet candy crystals he is made,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Why you ask? That’s the thing his loved ones paid</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">They asked the witch for a child with smooth complexion</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Someone sweet and smart with qualities to almost perfection</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The child grew up strong, someone way above norm</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He already gained the power to make a candy storm</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">You may think that’s something warm, cute, and sweet</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Sorry to disappoint you, it’s not something you can eat</p>
                            </div>
                            <div className="mb-0">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">In Mustachioverse, a candy storm is terrible disaster</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">One that’ll turn your properties to powder</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/4 mx-auto mb-3">
                            <img className="w-100" src={doorkeeper} alt="Door Keeper" />
                        </div>
                        <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="text-center text-3xl font-w-hermann w-hermann-ultrabold mb-4">Door Keeper</p>

                        <div className="px-2">
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The door keeper holds a special key</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">With him as your friend, there’s so many possibilities</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He can teleport you to different places</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Think and blink and you’re there in a second</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He’s so powerful that he can see</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Even a place in the past or a memory</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He said there’s a door for every location</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">With some gold, he’ll take you to your destination</p>
                            </div>
                            <div className="mb-0">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">If you want to go somewhere, he’s your Mustachio</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">There will be no trace, no one can find you</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/4 mx-auto mb-3">
                            <img className="w-100" src={dwinn} alt="Dwinn" />
                        </div>
                        <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="text-center text-3xl font-w-hermann w-hermann-ultrabold mb-4">Dwinn</p>

                        <div className="px-2">
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The adventurer Dwinn loves to win</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He’s very competitive, where do I begin?</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He once cheated in a top-level video game</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Won’t take losing as a choice, won’t ever take the blame</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He loves to compete throughout Mustachioeverse</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Be the number one person in a world that’s so diverse</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Why does he love winning every time?</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Well, for him losing is an unforgiveable crime</p>
                            </div>
                            <div className="mb-0">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He said “Why would you try when you’re not the best?”</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">“Just stay home, watch TV, and have some rest”</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/4 mx-auto mb-3">
                            <img className="w-100" src={eddiecrog} alt="Eddie Crog" />
                        </div>
                        <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="text-center text-3xl font-w-hermann w-hermann-ultrabold mb-4">Eddie Crog</p>

                        <div className="px-2">
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Every night Eddie Crog is out on the streets</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Looking for the next victim, everyone he greets</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">On the outside he looks pretty gentle and calm</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">But he’s always thinking how torturing someone has its charm</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He has different ways to make you feel excruciating pain</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He’ll hurt the physical while playing with your brain</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He said “what is a body without many scars”</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">“What is a mind if it’s not as soft as brittle bars”</p>
                            </div>
                            <div className="mb-0">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">If I were you, I wouldn’t stay on Elm Street</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Unless you want to be in his galleries, his favorite masterpiece</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/4 mx-auto mb-3">
                            <img className="w-100" src={evlguy} alt="EVL Guy" />
                        </div>
                        <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="text-center text-3xl font-w-hermann w-hermann-ultrabold mb-4">EVL Guy</p>

                        <div className="px-2">
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">EVL guy is this wicked Mustachios name</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">If something goes wrong, he’s usually the one they blame</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He is the dark magician in the land</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Playing with fate is within his hands</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">All his deeds were seen as bad omen</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">They cannot see that’s why he feels broken</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">“Avoid the Mustachio with the skull pendant</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He’ll mess with your mind when he’s militant”</p>
                            </div>
                            <div className="mb-0">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">They always avoid being with him like a plague</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Not knowing true connection will melt his heart that’s sad</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/4 mx-auto mb-3">
                            <img className="w-100" src={farmer} alt="Farmer" />
                        </div>
                        <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="text-center text-3xl font-w-hermann w-hermann-ultrabold mb-4">Farmer</p>

                        <div className="px-2">
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Into the field he goes from dawn till dusk</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Making sure there will always be food in stock</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Every day he would plow the fields</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Tilling the soil to improve the yields</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The Farmer is the most hardworking one</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Always checking that everything’s done</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Although this man is always busy</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He never forgets quality time with his family</p>
                            </div>
                            <div className="mb-0">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Loved by many Mustachios, that he can’t deny</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">For he is the ideal person of every girl and guy</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/4 mx-auto mb-3">
                            <img className="w-100" src={faun} alt="Faun" />
                        </div>
                        <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="text-center text-3xl font-w-hermann w-hermann-ultrabold mb-4">Faun</p>

                        <div className="px-2">
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Faun loves to play hide and seek behind the trees</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Blend with them properly till no one sees</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He’s a half human half goat creature that loves plants</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">A peaceful, quiet environment is what he wants</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He organized protests to save the wildlife in Mustachioverse</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Warning everyone to be avoid nature’s curse</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He studied several branches of biology</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">To save every single endangered specie</p>
                            </div>
                            <div className="mb-0">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He warns everyone to take good care of their pet</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Because if he knows you don’t, he’ll send you a threat</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/4 mx-auto mb-3">
                            <img className="w-100" src={frankiestan} alt="Frankie Stan" />
                        </div>
                        <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="text-center text-3xl font-w-hermann w-hermann-ultrabold mb-4">Frankie Stan</p>

                        <div className="px-2">
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Frankie Stan is Victor’s weird older brother</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The shadow behind the genius, the one they call sinister</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Together they’d do some crazy dead experiments</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">With different corpses and bloody embellishments</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">One time Frankie got the measurement wrong</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Made a monster so scary and hella strong</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">They couldn’t find where it went but they don’t mind</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">They said “if there’s news of disfigured bodies our pet we’ll find”</p>
                            </div>
                            <div className="mb-0">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">“This is our revenge to the whole Mustachioverse”</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">“They’ll know how helpless feels, more monsters we’ll disperse”</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/4 mx-auto mb-3">
                            <img className="w-100" src={frontline} alt="Frontline" />
                        </div>
                        <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="text-center text-3xl font-w-hermann w-hermann-ultrabold mb-4">Frontline</p>

                        <div className="px-2">
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Toil and toil around this pandemic trouble</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Getting sick for Frontline is almost inevitable</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The nature of his work is dangerous</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">For the deadly virus is highly contagious</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Mingling with others could prove to be fatal</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He wishes this situation would not be final</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Overwhelmed by the everything that’s going</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He dreams of a vacation for so long</p>
                            </div>
                            <div className="mb-0">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He prays every night for the discovery of a cure</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">And things go back to the way it was before</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/4 mx-auto mb-3">
                            <img className="w-100" src={verdantgreed} alt="Verdant Greed" />
                        </div>
                        <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="text-center text-3xl font-w-hermann w-hermann-ultrabold mb-4">Verdant Greed</p>

                        <div className="px-2">
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">This Mustachio looks as green as grass</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Don’t argue with him, for he is quite crass</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Fortunately, Verdant Greed was born in a noble family</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">With loving parents who accepts him completely</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He is greedy from the moment he turned one</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He doesn’t want to share his toys with anyone</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">His tutors worked hard to teach him how to be generous</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">They told him he doesn’t need to own everything that’s precious</p>
                            </div>
                            <div className="mb-0">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">After several years, this Mustachio finally learned his lesson</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">It’s love that makes him happy more than ten mansions</p>
                            </div>
                        </div>
                    </div>
                </article>

                {/* Chapter 4 */}
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <div className="w-1/3 mx-auto mt-5 mb-5">
                            <img className="w-100" src={sagesRant} alt="Chapter 3" />
                        </div>
                        <p className="text-center text-xl font-w-hermann w-hermann-reg mb-2">CHAPTER 4</p>
                        <h3 className="text-center font-w-hermann w-hermann-semibold">The Secret of the Southern Seas</h3>
                        <p className="text-center text-xl font-w-hermann w-hermann-semibold-italic ch-footer mb-5">The Sages Rant</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Chapter 4: The Secret of the Southern Seas</p>
                        <div className="w-1/4 mx-auto mt-3 mb-4 ">
                            <img className="w-100" src={chapter4Logo} alt="Chapter 4" />
                        </div>

                        {/* Stanzas */}
                        <div className="mb-3 px-4">
                            <p className="text-center font-w-hermann w-hermann-italic mb-0">
                                <span className="text-5xl">"A</span>“All hail the Southern Seas,
                            </p>
                            <p className="text-center font-w-hermann w-hermann-italic mb-0">Vested of the powers from the Isle of Rhe,</p>
                            <p className="text-center font-w-hermann w-hermann-italic mb-0">A broomstache yearning to be untangled</p>
                            <p className="text-center font-w-hermann w-hermann-italic mb-0">Will you be ready for the wrangle?”</p>
                        </div>
                        <div className="mb-3 px-4">
                            <p className="text-center font-w-hermann w-hermann-semibold mb-0">Setting out on a voyage in the Southern Seas, the Mustachios enjoy the gentle breeze offered by the calm and serene waters. Unbeknown to them the danger slowly raging, waiting for the perfect time to strike.</p>
                        </div>                        
                        <div className="mb-3 px-4">
                            <p className="text-center font-w-hermann w-hermann-semibold mb-0">As the night befall the Mustachios, chaos arose as none in particular started slamming into their ship, causing it to tip over. Poor little Mustachios, drenched in the cold cold water, falling in the whims of the rip tides.</p>
                        </div>                        

                        <p className="text-center font-w-hermann w-hermann-semibold-italic page-num">49</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Chapter 4: The Secret of the Southern Seas</p>

                        {/* Stanzas */}
                        <div className="mt-3 px-4">
                            <div className="mb-3">
                                <p className="text-center font-w-hermann w-hermann-semibold mb-0">Screams of terror echo through the night as the Mustachios realize the danger they are currently in.</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center font-w-hermann w-hermann-semibold mb-0">Their mistake was they rushed in without analyzing the riddle that was thrown at them by the journal. Oh Broomstache of the Southern Seas, how cruel could you be?</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center font-w-hermann w-hermann-semibold mb-0">In a place where sploosh and splash can only be heard in motion, where could their savior be?</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center font-w-hermann w-hermann-semibold mb-0">Only a sailor’s best friend could get them out of the Cross Sea now.</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center font-w-hermann w-hermann-semibold mb-0">“Aha! A comb at rest is as good as a rock!” a Mustachio shouted. </p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center font-w-hermann w-hermann-semibold mb-0">But a comb in motion set everything in its proper place.</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center font-w-hermann w-hermann-semibold mb-0">Every single Mustachio already thought as much and so, altogether, they let the current take them deep into its deadly tides to a place where no such wind could take control of the swells.</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center font-w-hermann w-hermann-semibold mb-0">Lucky for them that there is no undertow in this mess of a Cross Sea. That’s what makes the Broomstache of the Southern Seas special. Although, not a lot knows about it. </p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center font-w-hermann w-hermann-semibold mb-0">Holding their breath at once, either to conserve their oxygen or to float in reverence, something shiny in the deep abyss. Deep in a coral's mighty grip, a personification of a rock, lies the Charmed Comb, ever so shiny, so elegant, which can untangle almost any knot.</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center font-w-hermann w-hermann-semibold mb-0">The Comb’s power apparently knows no boundaries! Even the nonparallel phenomenon that is happening on the surface of the waters above can be cleared by this artifact. Extremely tangled ropes should be no problem. Any direction its keeper desires, thou shall bend to its will.</p>
                            </div>
                        </div>                        

                        <p className="text-center font-w-hermann w-hermann-semibold-italic page-num">50</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Chapter 4: The Secret of the Southern Seas</p>

                        {/* Stanzas */}
                        <div className="mt-3 px-4">
                            <div className="mb-3">
                                <p className="text-center font-w-hermann w-hermann-semibold mb-0">For a while, the Mustachios could only gloat in awe at the shining beauty of their savior. However, the reminder of their lung’s capacity, or lack thereof, pushed them to swim further to the suspiciously unguarded comb.</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center font-w-hermann w-hermann-semibold mb-0">Frosty, who has the greatest advantage in this journey in the Broomstache of the Southern Seas, could only laugh while watching the other Mustachios shiver in the cold, especially Fire Cracker Jack, the one who revels in fire and explosions.</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center font-w-hermann w-hermann-semibold mb-0">Ghost Face, ever so dim and lifeless, his face just doesn’t give off what he truly feels, watches the ever brave Ghost Prince, swim faster than any other Mustachio towards the Charmed Comb only to be struck with dismay upon the deathly grip of the coral which holds their savior. </p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center font-w-hermann w-hermann-semibold mb-0">A Mustachio nearly choked on how comedic and anime-like that scene looked. It appears to be the one and only Ghost, the loner of the group. No one really knows why he stuck with this group but none could care less. Either he’s following the one who murdered him or he’s just trying things he has never tried when he decided to end his life. </p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center font-w-hermann w-hermann-semibold mb-0">The Almighty King Hobgoblin, who swims in his own luxury, urges the clever tactician and a fan of spooking others, Ghost Clarence and the warrior with unparalleled strength, Dark Knight, to work their magic given their experiences to take out the comb. </p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center font-w-hermann w-hermann-semibold mb-0">However, a particular Mustachio unfortunately took a fancy to the corals rather than the artifact. Cave Wizard, as out-of-place as he is, started really enjoying the voyage when he took a glimpse of the corals, seeing it as a cursed object, wanting to make it his own weapon. </p>
                            </div>
                        </div>                       

                        <p className="text-center font-w-hermann w-hermann-semibold-italic page-num">51</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Chapter 3: Red, White, and Blue</p>

                        {/* Stanzas */}
                        <div className="mt-3 px-4">
                            <div className="mb-3">
                                <p className="text-center font-w-hermann w-hermann-semibold mb-0">Grim, on the other hand, took notice of the evil look adorning Cave Wizard's face, so he smacked him upside the head. While a lot were first intimidated by Grim, he ended up being completely opposite of his name. A valuable member of the Mustachio community, that he is.</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center font-w-hermann w-hermann-semibold mb-0">This group of particularly odd ones, strong war veterans, and noble Mustachios, chanted for enlightenment inside their heads for The Charmed Comb to be released in the deadly grip of the ironically friendly-looking corals. Unprecedentedly, the ever so shiny comb started shining even more. Enough to blind its spectators! But the Mustachios never back down from anything. The artifact then started pulsating and slowly started floating away from the coral's grip. Swaying from left to right, treating the square waves above as tangles, just to calm its two raging water systems.</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center font-w-hermann w-hermann-semibold mb-0">Here’s the catch. To which way will The Charmed Comb lead the Mustachios for the next artifact?</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center font-w-hermann w-hermann-semibold mb-0">Will you be the first and only Mustachio to solve this riddle and get The Comb for the Molestache of the Southern Seas?</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center font-w-hermann w-hermann-semibold mb-0">Mint your Mustachio now and enter the portal that will transport you to MustachioVerse!</p>
                                <p className="text-center font-w-hermann w-hermann-semibold mb-0">
                                    <a href="https://mustachioverse.com/">https://mustachioverse.com/</a>
                                </p>
                            </div>
                        </div>                       

                        <div className="mb-5 ch-footer mustachio-logo-mobile-wrap">
                            <div className="w-1/6 mx-auto mustachio-logo-mobile">
                                <img className="w-100" src={mustachioLogoFooter} alt="Mustachio Logo" />
                            </div>
                        </div>
                    </div>
                </article>

                {/* Chapter 4 Characters */}
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/4 mx-auto mb-3">
                            <img className="w-100" src={darkknight} alt="Dark Knight" />
                        </div>
                        <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="text-center text-3xl font-w-hermann w-hermann-ultrabold mb-4">Dark Knight</p>

                        <div className="px-2">
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">If you happen to pass by a Mustachio that looks like a zombie</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">That’s probably the famous Dark Knight that you see</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He won so many battles, more than you can count</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">With his mighty strength, no one is paramount</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">When he was younger, He lost one of his eyes because of a ferocious bear</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Later on, he hunted the exact animal in the same forest and killed it there</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He said “messing with me is like a death wish”</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">“If you cross my path, you won’t feel any bliss”</p>
                            </div>
                            <div className="mb-0">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The Dark Knight you see it not one to be trifled with</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He’s not going to be merciful until he see you bleed</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/4 mx-auto mb-3">
                            <img className="w-100" src={firecrackerjack} alt="Fire Cracker Jack" />
                        </div>
                        <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="text-center text-3xl font-w-hermann w-hermann-ultrabold mb-4">Fire Cracker Jack</p>

                        <div className="px-2">
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">You don’t wanna mess with fire cracker jack</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He’ll burn your house down in an instant attack</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Fireworks and firecrackers are all that he lives for</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He knows every kind, composition, and color</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">If you can’t see him often there’s a reason why</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He’s busy mixing chemicals to make some supply</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">In a bunker he’s attempting to create something crazy</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Probably to make the loudest firecracker there can be</p>
                            </div>
                            <div className="mb-0">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Why is he like that? Well, he loves all the noise</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He said he prefers it more than hearing everyone else’s voice</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/4 mx-auto mb-3">
                            <img className="w-100" src={frosty} alt="Frosty" />
                        </div>
                        <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="text-center text-3xl font-w-hermann w-hermann-ultrabold mb-4">Frosty</p>

                        <div className="px-2">
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Frosty loves the cold the way he loves gold</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">And he doesn’t always listen when’s he’s told</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He said what good would it be to follow every advice</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Not everyone wants your life to be nice</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Frosty wants to make a plantation in his icy location</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Grow fruits and veggies like peaches, carrots, and corn</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He doesn’t want to be nicknamed Frosty the Snowman</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Because he said it’s too basic and he’s not a common man</p>
                            </div>
                            <div className="mb-0">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">“I’ll live my own life and grown my own food”</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">“Even though I’m stubborn, I know it’s for my own good”</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/4 mx-auto mb-3">
                            <img className="w-100" src={ghostclarence} alt="Ghost Clarence" />
                        </div>
                        <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="text-center text-3xl font-w-hermann w-hermann-ultrabold mb-4">Ghost Clarence</p>

                        <div className="px-2">
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Rence the tactician also died in the great war</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">His troops were defeated, they’ve suffered worse by far</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">But Rence’s spirit will not give up easily</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">“My body might be gone, but my soul is still steady”</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">“I’ll scare the opponent’s generals, spook their horses and ponies”</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">“Won’t waste a single opportunity to make them all worry”</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">And so, he went on appearing at their camps at night</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Giving them nightmares when he showed up on their sight</p>
                            </div>
                            <div className="mb-0">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Ghost Clarence might have been strict and boring when he was alive</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Now he’s having fun and scaring enemies is his vibe</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/4 mx-auto mb-3">
                            <img className="w-100" src={ghostface} alt="Ghost Face" />
                        </div>
                        <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="text-center text-3xl font-w-hermann w-hermann-ultrabold mb-4">Ghost Face</p>

                        <div className="px-2">
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Ghost Face is the man who doesn’t have any charm</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He literally lives every day as if life’s a stupid scam</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He’s a man of terror and the whole town knows</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He likes to scare people by dressing up as a killer ghost</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">One day he went out on the streets holding a bloody knife</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Acted as if it’s the most normal thing in everyone’s daylife</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">When did he start to make people scream?</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Well, his past is quite lonely and dim</p>
                            </div>
                            <div className="mb-0">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">They said Ghost Face was born out of abuse</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">His parents died in an asylum according to past news</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/4 mx-auto mb-3">
                            <img className="w-100" src={ghostprince} alt="Ghost Prince" />
                        </div>
                        <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="text-center text-3xl font-w-hermann w-hermann-ultrabold mb-4">Ghost Prince</p>

                        <div className="px-2">
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Ghost Prince died terribly in the great war</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Fighting alongside his knights for what he stood for</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He believes that royalty shouldn’t hide behind castle walls</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">A man should show leadership, have clear and definite goals</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">So, when the war came, he volunteered to go</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The noble should also fight, that’s what he wants to show</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He clearly is one brave and young ambitious prince</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He said through his actions, the Mustachios he’ll convince</p>
                            </div>
                            <div className="mb-0">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">But on his death, he had just one wish</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">His ghost may wander to that fair maiden he greatly miss</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/4 mx-auto mb-3">
                            <img className="w-100" src={ghost} alt="Ghost" />
                        </div>
                        <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="text-center text-3xl font-w-hermann w-hermann-ultrabold mb-4">Ghost</p>

                        <div className="px-2">
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Ghost was a man of Japanese descent</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">That’s why if a Mustachio watches anime, he’s always present</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">If you see him, he moves somewhat awkward</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">His posture is bad, he also looks kinda haggard</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Well, Ghost lived his life before as a loner</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Even on his birthdays, he’s the one who makes his greeting banner</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Another mystery in the Mustachioverse is how he died</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Cause no one saw him for two years until his corpse they’d find</p>
                            </div>
                            <div className="mb-0">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Maybe someone killed him and there’s a murderer on the loose</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Or he wanted to end it all and death is what he choose</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/4 mx-auto mb-3">
                            <img className="w-100" src={grim} alt="Grim" />
                        </div>
                        <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="text-center text-3xl font-w-hermann w-hermann-ultrabold mb-4">Grim</p>

                        <div className="px-2">
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Grim is the last of reapers in the land</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">A cool guy who can end your life with one flick of his hand</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">At first no one wants to be friend with Grim</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Cause he has this deadly stare as if he’s thinking of a dark scheme</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">But everyone got used to it and loved grim cause he is a funny guy</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">But sometimes he makes scary jokes like “Hey, it’s your time to die!”</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He stopped the dark humor cause it’s making everyone uncomfortable</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">And started helping people by making their last day memorable</p>
                            </div>
                            <div className="mb-0">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">You think Grim lives a complicated life but Grim is really happy</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He loves his work and a valuable member of the Mustachio community</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/4 mx-auto mb-3">
                            <img className="w-100" src={kinghobgoblin} alt="King Hobgoblin" />
                        </div>
                        <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="text-center text-3xl font-w-hermann w-hermann-ultrabold mb-4">King Hobgoblin</p>

                        <div className="px-2">
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">This powerful enigmatic king loves gold and satin</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He likes everything fancy, there is no denying</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">King Hobgoblin buys the most expensive wines</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">If he invites you to dinner, the best meal you’ll find</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He’s a generous man who likes to share his wealth</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">If he likes you, you’ll probably receive some jewelry and a golden belt</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">But if you meet him, there’s one thing you should know</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">This king won’t tolerate any disrespect that you’ll show</p>
                            </div>
                            <div className="mb-0">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">So be extra careful with how you behave</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">If you piss him off, you’re digging your grave</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/4 mx-auto mb-3">
                            <img className="w-100" src={turfywizard} alt="Turfy Wizard" />
                        </div>
                        <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="text-center text-3xl font-w-hermann w-hermann-ultrabold mb-4">Turfy Wizard</p>

                        <div className="px-2">
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The wizard sells anything that he thinks is cursed</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He has all the weird trinkets you can see if you are bored</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He’s got different spells for something really wicked</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Artifacts, jewelries, and weapons that look twisted</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He even got potions that’ll transform your enemy into a bug</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Or a necklace that’ll make someone smell like a dead frog</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">You see Cave Wizzard is also a fan of astrology</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He’ll tell you your future in exchange of one hefty fee</p>
                            </div>
                            <div className="mb-0">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Don’t question his methods though or call him a fraud</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He’ll curse your life and play with it like a gameboard</p>
                            </div>
                        </div>
                    </div>
                </article>

                {/* Up Next */}
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <h3 className="text-center font-w-hermann w-hermann-semibold">CHAPTER 5</h3>
                        <p className="text-center text-lg font-w-hermann w-hermann-reg mb-3">Release Date: October 13, 2021 - 9PM SGT</p>
                        
                        <div className="d-flex justify-content-around mb-3 w-1/2 mx-auto mobile-socmed-icons">
                            <a href={socMedHandles.fb} target="_blank" rel="noreferrer">
                                <FontAwesomeIcon className="text-black footer-icons" color="black" size="2x" icon={faFacebook} />
                            </a>
                            <a href={socMedHandles.ig} target="_blank" rel="noreferrer">
                                <FontAwesomeIcon className="text-black footer-icons" color="black" size="2x" icon={faInstagram} />
                            </a>
                            <a href={socMedHandles.discord} target="_blank" rel="noreferrer">
                                <FontAwesomeIcon className="text-black footer-icons" color="black" size="2x" icon={faDiscord} />
                            </a>
                            <a href={socMedHandles.twitter} target="_blank" rel="noreferrer">
                                <FontAwesomeIcon className="text-black footer-icons" color="black" size="2x" icon={faTwitter} />
                            </a>
                        </div>
                    </div>
                </article>
            </FlipPage>
        </div>
    )
}

export default TabletDesign