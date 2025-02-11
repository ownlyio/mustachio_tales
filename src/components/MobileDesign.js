import FlipPage from 'react-flip-page'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import ChapterPages from '../utils/chapters'
import './MobileDesign.css'

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

// chapter 2 images
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

// chapter 3 characters
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

// chapter 4 characters
import chapter4Logo from '../images/ch_4/chap4.png'

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

// chapter 5 images
import chapter5Logo from '../images/ch_5/chap5.png'

// chapter 5 characters
import creepystrawhat from '../images/ch_5/characters/creepy_strawhat.png'
import crimson from '../images/ch_5/characters/crimson.png'
import dummy from '../images/ch_5/characters/dummy.png'
import hotdog from '../images/ch_5/characters/hotdog.png'
import incubus from '../images/ch_5/characters/incubus.png'
import inka from '../images/ch_5/characters/inka.png'
import jasondkiller from '../images/ch_5/characters/jason_dkiller.png'
import jungle from '../images/ch_5/characters/jungle.png'
import kingstellar from '../images/ch_5/characters/king_stellar.png'
import leatherface from '../images/ch_5/characters/leather_face.png'

// chapter 6 images
import chapter6Logo from '../images/ch_6/chap6.png'

// chapter 6 characters
import forestlord from '../images/ch_6/characters/forest_lord.png'
import forestwarrior from '../images/ch_6/characters/forest_warrior.png'
import frozensundae from '../images/ch_6/characters/frozen_sundae.png'
import leprechaun from '../images/ch_6/characters/leprechaun.png'
import lichking from '../images/ch_6/characters/lichking.png'
import lisby from '../images/ch_6/characters/lisby.png'
import lizzardprince from '../images/ch_6/characters/lizzard_prince.png'
import lsp from '../images/ch_6/characters/lsp.png'
import lullaby from '../images/ch_6/characters/lullaby.png'
import squarehead from '../images/ch_6/characters/squarehead.png'

// chapter 7 images
import chapter7Logo from '../images/ch_7/chap7.png'

// chapter 7 characters
import magicman from '../images/ch_7/characters/magic_man.png'
import marci from '../images/ch_7/characters/marci.png'
import mermanwarrior from '../images/ch_7/characters/merman_warrior.png'
import mexico from '../images/ch_7/characters/mexico.png'
import mountainwarrior from '../images/ch_7/characters/mountain_warrior.png'
import mountainwarrior2 from '../images/ch_7/characters/mountain_warrior_2.png'
import neos from '../images/ch_7/characters/neos.png'
import nightmare from '../images/ch_7/characters/nightmare.png'
import ninja from '../images/ch_7/characters/ninja.png'
import onku from '../images/ch_7/characters/onku.png'

// chapter 8 images
import chapter8Logo from '../images/ch_8/chap8.png'

// chapter 8 characters
import bubblegum from '../images/ch_8/characters/bubblegum.png'
import loonywise from '../images/ch_8/characters/loonywise.png'
import paddle from '../images/ch_8/characters/paddle.png'
import pancakeprince from '../images/ch_8/characters/pancake_prince.png'
import paratrooper from '../images/ch_8/characters/paratrooper.png'
import pecorider from '../images/ch_8/characters/peco_rider.png'
import penny from '../images/ch_8/characters/penny.png'
import peppermintbutler from '../images/ch_8/characters/peppermint_butler.png'
import pilot from '../images/ch_8/characters/pilot.png'
import pumpkinman from '../images/ch_8/characters/pumpkin_man.png'

// chapter 9 images
import chapter9Logo from '../images/ch_9/chap9.png'

// chapter 9 characters
import dako from '../images/ch_9/characters/dako.png'
import laya from '../images/ch_9/characters/laya.png'
import raggedyprince from '../images/ch_9/characters/raggedy_prince.png'
import scarecrow from '../images/ch_9/characters/scare_crow.png'
import shoko from '../images/ch_9/characters/shoko.png'
import signmaker from '../images/ch_9/characters/sign_maker.png'
import simone from '../images/ch_9/characters/simone.png'
import skatezone from '../images/ch_9/characters/skatezone.png'
import skeletonprince from '../images/ch_9/characters/skeleton_prince.png'
import slendie from '../images/ch_9/characters/slendie.png'

// chapter 10 images
import chapter10Logo from '../images/ch_10/chap10.png'

// chapter 10 characters
import sludgie from '../images/ch_10/characters/sludgie.png'
import spaceman from '../images/ch_10/characters/space_man.png'
import spacepirate from '../images/ch_10/characters/space_pirate.png'
import spiritdream from '../images/ch_10/characters/spirit_dream.png'
import stanmarch from '../images/ch_10/characters/stan_march.png'
import stopover from '../images/ch_10/characters/stopover.png'
import swampmonster from '../images/ch_10/characters/swamp_monster.png'
import theviolinist from '../images/ch_10/characters/the_violinist.png'
import townspeople from '../images/ch_10/characters/towns_people.png'
import tsuku from '../images/ch_10/characters/tsuku.png'

// epilogue images
import epilogueLogo from '../images/ch_1/page2-pic.png'

function MobileDesign({ socMedHandles, flipPage}) {
    const filterChapters = (arr, start, end = arr.length) => {
        return arr.filter(x => {
            return (x.id >= start && x.id <= end)
        })
    }

    return (
        <div className="d-block d-md-none">
            <FlipPage
                className="book"
                showTouchHint
                uncutPages
                orientation="vertical"
                animationDuration="1000"
                disableSwipe="true"
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
                        <h3 className="text-center text-2xl font-w-hermann w-hermann-semibold mb-4">Table of Contents</h3>
                        
                        {filterChapters(ChapterPages, 1, 20).map((x, k) => (
                            !x.subpage ? (
                                <div className="row tc-link" onClick={() => flipPage.gotoPage(x.pageIndexMobile)} key={x.id}>
                                    <div className="col-7">
                                        <p className="font-w-hermann w-hermann-semibold mb-0">{x.title}</p>
                                    </div>
                                    <div className="col-5">
                                        <p className="text-right font-w-hermann w-hermann-semibold mb-0">{x.pageMobile}</p>
                                    </div>
                                </div>
                            ) : (
                                <div className="row tc-link indent" onClick={() => flipPage.gotoPage(x.pageIndexMobile)} key={x.id}>
                                    <div className="col-7">
                                        <p className="text-sm font-w-hermann w-hermann mb-0">{x.title}</p>
                                    </div>
                                    <div className="col-5">
                                        <p className="text-right text-sm font-w-hermann w-hermann mb-0">{x.pageMobile}</p>
                                    </div>
                                </div>
                            )
                        ))}
                        
                        <p className="text-center text-xl font-w-hermann w-hermann-semibold-italic ch-footer mb-5">The Sages Rant</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start pt-4" style={{position: "relative"}}>
                        <h3 className="text-center text-2xl font-w-hermann w-hermann-semibold mb-4">Table of Contents</h3>
                        
                        {filterChapters(ChapterPages, 21, 38).map((x, k) => (
                            !x.subpage ? (
                                <div className="row tc-link" onClick={() => flipPage.gotoPage(x.pageIndexMobile)} key={x.id}>
                                    <div className="col-7">
                                        <p className="font-w-hermann w-hermann-semibold mb-0">{x.title}</p>
                                    </div>
                                    <div className="col-5">
                                        <p className="text-right font-w-hermann w-hermann-semibold mb-0">{x.pageMobile}</p>
                                    </div>
                                </div>
                            ) : (
                                <div className="row tc-link indent" onClick={() => flipPage.gotoPage(x.pageIndexMobile)} key={x.id}>
                                    <div className="col-7">
                                        <p className="text-sm font-w-hermann w-hermann mb-0">{x.title}</p>
                                    </div>
                                    <div className="col-5">
                                        <p className="text-right text-sm font-w-hermann w-hermann mb-0">{x.pageMobile}</p>
                                    </div>
                                </div>
                            )
                        ))}
                        
                        <p className="text-center text-xl font-w-hermann w-hermann-semibold-italic ch-footer mb-5">The Sages Rant</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start pt-4" style={{position: "relative"}}>
                        <h3 className="text-center text-2xl font-w-hermann w-hermann-semibold mb-4">Table of Contents</h3>
                        
                        {filterChapters(ChapterPages, 39, 55).map((x, k) => (
                            !x.subpage ? (
                                <div className="row tc-link" onClick={() => flipPage.gotoPage(x.pageIndexMobile)} key={x.id}>
                                    <div className="col-7">
                                        <p className="font-w-hermann w-hermann-semibold mb-0">{x.title}</p>
                                    </div>
                                    <div className="col-5">
                                        <p className="text-right font-w-hermann w-hermann-semibold mb-0">{x.pageMobile}</p>
                                    </div>
                                </div>
                            ) : (
                                <div className="row tc-link indent" onClick={() => flipPage.gotoPage(x.pageIndexMobile)} key={x.id}>
                                    <div className="col-7">
                                        <p className="text-sm font-w-hermann w-hermann mb-0">{x.title}</p>
                                    </div>
                                    <div className="col-5">
                                        <p className="text-right text-sm font-w-hermann w-hermann mb-0">{x.pageMobile}</p>
                                    </div>
                                </div>
                            )
                        ))}
                        
                        <p className="text-center text-xl font-w-hermann w-hermann-semibold-italic ch-footer mb-5">The Sages Rant</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start pt-4" style={{position: "relative"}}>
                        <h3 className="text-center text-2xl font-w-hermann w-hermann-semibold mb-4">Table of Contents</h3>
                        
                        {filterChapters(ChapterPages, 56, 72).map((x, k) => (
                            !x.subpage ? (
                                <div className="row tc-link" onClick={() => flipPage.gotoPage(x.pageIndexMobile)} key={x.id}>
                                    <div className="col-7">
                                        <p className="font-w-hermann w-hermann-semibold mb-0">{x.title}</p>
                                    </div>
                                    <div className="col-5">
                                        <p className="text-right font-w-hermann w-hermann-semibold mb-0">{x.pageMobile}</p>
                                    </div>
                                </div>
                            ) : (
                                <div className="row tc-link indent" onClick={() => flipPage.gotoPage(x.pageIndexMobile)} key={x.id}>
                                    <div className="col-7">
                                        <p className="text-sm font-w-hermann w-hermann mb-0">{x.title}</p>
                                    </div>
                                    <div className="col-5">
                                        <p className="text-right text-sm font-w-hermann w-hermann mb-0">{x.pageMobile}</p>
                                    </div>
                                </div>
                            )
                        ))}
                        
                        <p className="text-center text-xl font-w-hermann w-hermann-semibold-italic ch-footer mb-5">The Sages Rant</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start pt-4" style={{position: "relative"}}>
                        <h3 className="text-center text-2xl font-w-hermann w-hermann-semibold mb-4">Table of Contents</h3>
                        
                        {filterChapters(ChapterPages, 73, 89).map((x, k) => (
                            !x.subpage ? (
                                <div className="row tc-link" onClick={() => flipPage.gotoPage(x.pageIndexMobile)} key={x.id}>
                                    <div className="col-7">
                                        <p className="font-w-hermann w-hermann-semibold mb-0">{x.title}</p>
                                    </div>
                                    <div className="col-5">
                                        <p className="text-right font-w-hermann w-hermann-semibold mb-0">{x.pageMobile}</p>
                                    </div>
                                </div>
                            ) : (
                                <div className="row tc-link indent" onClick={() => flipPage.gotoPage(x.pageIndexMobile)} key={x.id}>
                                    <div className="col-7">
                                        <p className="text-sm font-w-hermann w-hermann mb-0">{x.title}</p>
                                    </div>
                                    <div className="col-5">
                                        <p className="text-right text-sm font-w-hermann w-hermann mb-0">{x.pageMobile}</p>
                                    </div>
                                </div>
                            )
                        ))}
                        
                        <p className="text-center text-xl font-w-hermann w-hermann-semibold-italic ch-footer mb-5">The Sages Rant</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start pt-4" style={{position: "relative"}}>
                        <h3 className="text-center text-2xl font-w-hermann w-hermann-semibold mb-4">Table of Contents</h3>
                        
                        {filterChapters(ChapterPages, 90, 108).map((x, k) => (
                            !x.subpage ? (
                                <div className="row tc-link" onClick={() => flipPage.gotoPage(x.pageIndexMobile)} key={x.id}>
                                    <div className="col-7">
                                        <p className="font-w-hermann w-hermann-semibold mb-0">{x.title}</p>
                                    </div>
                                    <div className="col-5">
                                        <p className="text-right font-w-hermann w-hermann-semibold mb-0">{x.pageMobile}</p>
                                    </div>
                                </div>
                            ) : (
                                <div className="row tc-link indent" onClick={() => flipPage.gotoPage(x.pageIndexMobile)} key={x.id}>
                                    <div className="col-7">
                                        <p className="text-sm font-w-hermann w-hermann mb-0">{x.title}</p>
                                    </div>
                                    <div className="col-5">
                                        <p className="text-right text-sm font-w-hermann w-hermann mb-0">{x.pageMobile}</p>
                                    </div>
                                </div>
                            )
                        ))}
                        
                        <p className="text-center text-xl font-w-hermann w-hermann-semibold-italic ch-footer mb-5">The Sages Rant</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start pt-4" style={{position: "relative"}}>
                        <h3 className="text-center text-2xl font-w-hermann w-hermann-semibold mb-4">Table of Contents</h3>
                        
                        {filterChapters(ChapterPages, 109).map((x, k) => (
                            !x.subpage ? (
                                <div className="row tc-link" onClick={() => flipPage.gotoPage(x.pageIndexMobile)} key={x.id}>
                                    <div className="col-7">
                                        <p className="font-w-hermann w-hermann-semibold mb-0">{x.title}</p>
                                    </div>
                                    <div className="col-5">
                                        <p className="text-right font-w-hermann w-hermann-semibold mb-0">{x.pageMobile}</p>
                                    </div>
                                </div>
                            ) : (
                                <div className="row tc-link indent" onClick={() => flipPage.gotoPage(x.pageIndexMobile)} key={x.id}>
                                    <div className="col-7">
                                        <p className="text-sm font-w-hermann w-hermann mb-0">{x.title}</p>
                                    </div>
                                    <div className="col-5">
                                        <p className="text-right text-sm font-w-hermann w-hermann mb-0">{x.pageMobile}</p>
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

                {/* Prologue */}
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

                        <p className="text-center font-w-hermann w-hermann-semibold-italic page-num">5</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Chapter 1: The Inception</p>

                        {/* Stanzas */}
                        <div className="mt-3 content-mobile-wrap">
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">As they come upon the cave's mouth, they see the glow pulsating from behind the rocks. Half hidden with debris, they find the source of this immense glow. It looks like a book with light leaking out from cracks on the cover and the pages.</p>
                            </div>

                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">As the light dims, they see an aged journal, torn and beat up but shaking like it is charging up. It lights back up again. This time blasting an intense array of light and a booming sound that echoes around the cave. It sounds almost like a deep voice. An announcement as the different colored lights swirl into many interesting shapes. Dancing enchantingly fast and jovial. Then slows down, floats into a circular shape. A tunnel.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Abracadoobie with his staff, a deceitful distraction, heard an echo from a distance, smirking, ready for some action. As Bandwip showed deep interest in treasures and adventures, even Cairo, the great thief, lighted up like a candle in the darkness. With a snigger he said, “Ready or not, the next legend is upon us.” Eyes glazing as Berry, the high-pitched wild berry warrior, exclaimed “The coast is clear, now we’re ready for some more!”.</p>
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
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Gamer Boi, the avid video gamer, stopped dead in his tracks as he picked up The Lost Diary. “He who dared seek victory through audacious exploits”, it read. “Shall claim The Grooming Kit and Golden Mustache, some light years ahead.”</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">As Aster, the man on a moon mission, flipped over to the next sheet, it showed nine mysterious artifacts, marking nine impossible feats. Bacon Prince, the next ruler of the mouthwatering Breakfast Kingdom, also wanted to pitch in some of his egg and bacon wisdom.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Bug, the melancholic Mustachio, grinned from ear to ear. Now in such good spirits, for the first time in a hundred years! Delighted, Bee Lee jumped up and down in his bespoke yellow jumpsuit. “The time has come for me to depart for the wildest pursuit!”. And so Pulsar flapped his wings, beyond thrilled to fly, for the greatest mystery unsolved emerged and no Mustachio knows why.</p>
                            </div>
                        </div>

                        <p className="text-center font-w-hermann w-hermann-semibold-italic page-num">7</p>
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
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={abracadoobie} alt="AbracaDoobie" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">AbracaDoobie</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center font-w-hermann w-hermann-reg mb-0">Twas in Mustachioverse before magic was known,</p>
                                <p className="content-characters-mobile text-center font-w-hermann w-hermann-reg mb-0">a man named Doobie existed.</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center font-w-hermann w-hermann-reg mb-0">He does this weird stuff while moving his staff,</p>
                                <p className="content-characters-mobile text-center font-w-hermann w-hermann-reg mb-0">like teleport things out of nowhere</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center font-w-hermann w-hermann-reg mb-0">No one knows, it is in his dark 'stache,</p>
                                <p className="content-characters-mobile text-center font-w-hermann w-hermann-reg mb-0">where the magic came from and started</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center font-w-hermann w-hermann-reg mb-0">The staff is a diversion — his deceitful distraction</p>
                                <p className="content-characters-mobile text-center font-w-hermann w-hermann-reg mb-0">to keep his mustache power a secret</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center font-w-hermann w-hermann-reg mb-0">The other Mustachios scared of his magic,</p>
                                <p className="content-characters-mobile text-center font-w-hermann w-hermann-reg mb-0">started calling him Abracadoobie.</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={aster} alt="Aster" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Aster</p>

                        <div className="px-2">
                            <div className="mb-3">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Aster is a cool and secretive Mustachio</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">who like to tell others that she is on a mission</p>
                            </div>
                            <div className="mb-3">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">“What mission?” they ask,</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">She wouldn’t give them an answer</p>
                            </div>
                            <div className="mb-3">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">When they keep pestering her</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">She’d say “It’s confidential and it would put them in danger”</p>
                            </div>
                            <div className="mb-3">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">She goes to the MOON, that’s all everyone knows</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">What she does there, that’s still a big question</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Maybe during a random day, the Mustachioverse will find</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">What MOON stands for, it will surely blow their mind</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={baconprince} alt="Bacon Prince" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Bacon Prince</p>

                        <div className="px-2">
                            <div className="mb-3">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">The bacon prince is one who likes to brag,</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">“I’m the next ruler of breakfast kingdom” while he waved their flag</p>
                            </div>
                            <div className="mb-3">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">The prince is an only child and he is smart,</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">But sometimes his humor is off and quite dark.</p>
                            </div>
                            <div className="mb-3">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He’ll ask visitors how they like to cook their eggs,</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">If they answered wrong, he’ll jokingly ask the guard to take their head</p>
                            </div>
                            <div className="mb-3">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">That makes bacon prince a bit of a loner,</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">For making good jokes, he has yet to master</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He might have everything but there’s one thing he wish for,</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">A friend he can laugh with his darkest humor</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={bandwip} alt="Bandwip" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Bandwip</p>

                        <div className="px-2">
                            <div className="mb-3">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">The bandit stays in taverns</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">While drinking something fancy</p>
                            </div>
                            <div className="mb-3">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He’s waiting to hear stories of treasures,</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Of golden chests, diamonds, pears, and rubies</p>
                            </div>
                            <div className="mb-3">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He wants some dangerous adventures,</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">A chance to slash someone evil with his broad sword</p>
                            </div>
                            <div className="mb-3">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Everyone fears him because of he has two large horns,</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">They think to be a Samurai is the reason he is born</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">They do not know having an animal sanctuary is his ultimate wish</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Use all the gold he stole to for dogs, alpacas, and his favorite fish</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={beelee} alt="Bee Lee" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Bee Lee</p>

                        <div className="px-2">
                            <div className="mb-3">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">On the highest mountain top, a Mustachio is born</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">She is of royalty, descendant from Bee</p>
                            </div>
                            <div className="mb-3">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">She only wears jumpsuit in yellow and black,</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Complains that royal outfits are very uncomfy and hurts her back</p>
                            </div>
                            <div className="mb-3">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Bee Lee’s been training herself for several years,</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">To control other bees because someday she’ll be their queen</p>
                            </div>
                            <div className="mb-3">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">She looks so innocent but don’t mess with her,</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">This girl’s fully capable of Mustachio murder</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">A bit unstable but who can complain,</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">She’s top-tier Mustachio pretty and worth all the pain</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={berry} alt="Berry" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Berry</p>

                        <div className="px-2">
                            <div className="mb-3">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">There’s this Mustachio whose hair resembles fire,</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Whose Karate skills can make you scream and cry</p>
                            </div>
                            <div className="mb-3">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">With her high-pitched voice,</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">she’ll make your ears bleed</p>
                            </div>
                            <div className="mb-3">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">When she sing you songs, you can’t complain</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Or else she’ll make sure you can’t talk ever again</p>
                            </div>
                            <div className="mb-3">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">People are always cautious when she’s around,</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">They’re wary of the bad girl who is self-crowned</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Her original name was actually little cherry,</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">But she made everyone call her beautiful wild berry</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={bug} alt="Bug" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Bug</p>

                        <div className="px-2">
                            <div className="mb-3">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Bug was one melancholic Mustachio,</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">who feels everyday is kind of a drag</p>
                            </div>
                            <div className="mb-3">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He has depression and anxiety,</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">But he thinks that he is just born sad</p>
                            </div>
                            <div className="mb-3">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He said he heard some buzzing in his head,</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">“It’s just your mind and imagination” they said</p>
                            </div>
                            <div className="mb-3">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He know’s it’s real, he’s not making it up</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">But no one seems to listen</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">“One day”, he said “someone will understand”</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">“I won’t be lonely; I’ll be genuinely glad”</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={cairo} alt="Cairo" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Cairo</p>

                        <div className="px-2">
                            <div className="mb-3">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Cairo was a bit of a klepto</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Who had four eyes and lives in the Metro</p>
                            </div>
                            <div className="mb-3">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He likes to steal things that aren’t his</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Without making everyone feel that something’s amiss</p>
                            </div>
                            <div className="mb-3">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Cairo knows he is a master thief</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Can never be caught by the Mustachio chief</p>
                            </div>
                            <div className="mb-3">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">If you like something to stolen,</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">You need to prepare him a generous fee</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Where did he learns his skills, that you might wonder</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He grew up on the streets and was taught by his Father</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={gamerboi} alt="Gamer Boi" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Gamer Boi</p>

                        <div className="px-2">
                            <div className="mb-3">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">The pied piper said Gamer Boi came from an old rusty computer,</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">His tale of existence is much of a questionable order</p>
                            </div>
                            <div className="mb-3">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">His mother asked for child through every night in a prayer</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">“Almighty, give me a son, take whatever you want”</p>
                            </div>
                            <div className="mb-3">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Then the next day a baby appeared,</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">But weirdly enough, her old computer is gone.</p>
                            </div>
                            <div className="mb-3">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">The child has a large monitor on his head,</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He made beeping sounds while he sleeps on his bed</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He loved video games and he always win</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Except for his social skills – is quite missing, that’s the thing</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={pulsar} alt="Pulsar" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Pulsar</p>

                        <div className="px-2">
                            <div className="mb-3">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Tales have been told about the space angel’s origin,</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Songs have been sung about myths where he began,</p>
                            </div>
                            <div className="mb-3">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Many have tried to ask this Mustachio where he came from,</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">“The Third Heavens” he said as he began to describe the realm</p>
                            </div>
                            <div className="mb-3">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He said beyond MustachioVerse exists another place,</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">where stars feel closer and things float in infinite space,</p>
                            </div>
                            <div className="mb-3">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Many believed that’s why he has wings,</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">To fly and explore, try to discover things</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He is almost perfect and everyone treated him well,</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Believing later on, he is some kind of “god” and not just an angel</p>
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

                        <p className="text-center font-w-hermann w-hermann-semibold-italic page-num">20</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Chapter 2: The Blade at Fellowcro</p>

                        {/* Stanzas */}
                        <div className="mt-3 content-mobile-wrap">
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Guided by the clues and descriptions left by The Prospector, The Mustachios enter the forest with calm minds and sharp senses. That at least is needed for the trail that leads them to the belly of a beast.</p>
                            </div> 
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">It must be nearing sunset outside the forest's eternal night. The groups continue their hike into trails of the forest. Except for snarls and stares of creatures prowling behind the seemingly conscious overgrowth, nothing much exciting came along the way of the Mustachios. Safety in numbers, maybe.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">When suddenly a shrill scream breaks the thick forest air. In a rush of adrenaline, the young Mustachios leapt into action, searching for the source of the sound. Running and jumping through the branches and roots that came alive closing in on them, wanting to bind and crush. But the Mustachios are wily and athletic, they came upon a clearing where the plants weren’t able to follow them.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">The scream goes off again, louder this time for right in front of them they see it. Bewilderment painted the faces of the Mustachios for this is not in the book.</p>
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
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">They all glanced over Rench, a knight best known for his clever strategies and a tactician who can defeat any enemies. “But what am I to do?” Rench said. “I love war but this is another quest. It may not be military, but I’m always up for a game.”</p>
                            </div>
                        </div>

                        <p className="text-center font-w-hermann w-hermann-semibold-italic page-num">22</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Chapter 2: The Blade at Fellowcro</p>

                        {/* Stanzas */}
                        <div className="mt-3 content-mobile-wrap">
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

                        <p className="text-center font-w-hermann w-hermann-semibold-italic page-num">23</p>
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
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={candycane} alt="Candy Cane" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Candy Cane</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">This girl is the definition of someone weird</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">With hair so white and shirts so big</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Sometimes she goes to a concert just to scream</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">After that she’ll devour a big tub of ice cream</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Candy Cane is irony personified</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">With emotions overflowing like a tide</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">She likes the sweetest candies and saddest songs</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Loves heavy rock music and wants a pet unicorn</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Yet beware, her eyes can hypnotize you to sleep</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">You’ll have a deep slumber that’ll last more than a week</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={candywitch} alt="Candy Witch" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Candy Witch</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Candy Witch is popular with many children</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">She is to them an angel, their sweet haven</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">With her spells she can make any dessert</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Cakes, cookies, you name it – she’s the sweet tooth expert</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">She flies with her chocolate broom</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">While sprinkling delectable goodies</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">A trail of pink candies is the sign</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Candy Witch here you’ll find</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">However, no one knows, this Mustachios diabetic</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">And even loved many, she’s her own worst critic</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={carabaohead} alt="CarabaoHead" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">CarabaoHead</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">A Mustachio of ancient rituals is CarabaoHead</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He shakes his body while chanting words of dread</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He speaks these words while dancing</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">“existing, living, two different thing”</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He milks his headdress everyday</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">To get some money to learn ballet</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He was orphan who didn’t know his parents</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Only knows he can produce milk with his headdress</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Although this mustached being is confused about his identity</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He promised to be the greatest dancer throughout Mustacheternity</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={carbon} alt="Carbon" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Carbon</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Carbon is literally more human than others</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Because He is a humanoid fighting against evil</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Legend says he killed more than a thousand</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Throughout space he is known by everyone</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Is he a good Mustachio? That’s still debatable</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Probably cause he’s also partly evil</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Carbon thinks there should be no exceptions</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Even to the slightest offensive allegations</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Some says his ways for punishment is a questionable matter</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">But monsters can only be extinguished by another monster</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={caster} alt="Caster" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Caster</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Caster have always been popular in his class</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">There is no spell he cannot cast</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">A bit of a bully who's lost in his ways</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">But one day he found a girl in a garden maze</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He fell in love the first moment he saw her</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He told himself this one is not like any other</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He fixed his life to win “the one”</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">But before he talked to her, she was gone</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Although uncool, he asked everyone for clues</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">And so began, his life-long Mustachio cruise</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={catchawave} alt="Catch A Wave" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Catch A Wave</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Catch-A-Wave was only his nickname</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">A great surfer with money, looks, and fame</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He is a child of the sea,</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">And calls the sun his mother</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">But really his family died in a terrible disaster</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Some spacecraft anomaly, that’s what he remembers</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He pretends his memories are gone, that he doesn’t know</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Someone caused their spaceship to blow</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He is plotting for vengeance since he was ten</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">“At the right time dear self” he said “Be patient Ben”</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={cavewizard} alt="Cave Wizard" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Cave Wizard</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">The Cave Wizard guards a hidden cave</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">A pathway to an alternate reality his forefathers made</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He inhabits the area beneath the rocks of a cliff,</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">with his red glowing wizard staff that he likes to whiff</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Why does he do that, well it’s his way</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Of making himself look crazy, of scaring people away</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He knows it’s important he doesn’t let anyone know,</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">That a secret place exists, an area made of rainbow</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He is the keeper of the cave, the man in charge</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Until a strong Mustachio stood in front of the cave door and tried to barge.</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={climber} alt="Climber" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Climber</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">The climber is one insecure man who is a bit wacko</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Because compared to everyone, he’s the shortest Mustachio</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He wants to climb the highest mountains to compensate for his height</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">“Taller than everyone, I’ll be the proudest person in sight”</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">A man of great altitude he aims to be</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Thousands of kilometers above the sea</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">His commitment and dedication to pursue his dream</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Made him the strongest climber even on places that are too extreme</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He almost lost a limb on one perilous mountain trail,</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">“Well, this one’s quite a daring challenge” he says “no one will dare”</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={rench} alt="Rench" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Rench</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">A knight was known for clever strategies</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">A tactician who can defeat any enemies</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Rench is this Mustachios’ name,</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">And battles are his favorite game</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He is a soldier since he was still child</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">No one knows the last time he smiled</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Trained all his life, wars are all he lived for</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Never knew outside military, there’s so much more</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He has a routine that he never breaks</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Until one dawn when many lives are at stake</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={shucks} alt="Shucks" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Shucks</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Shucks looks like someone out of a horror movie</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">With a scar that makes him pretty damn scary</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">But beneath the imperfect skin,</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Is a heart that's kind and glows within</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">It's true he loves real crime documentaries</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">And he doesn't flinch when movie scenes go murdery</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">But that doesn't mean that he's a serial killer</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">This Mustachio will treat you well more than any other</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">In spite of being bullied all his life</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Shucks kept being kind and won’t start a fight</p>
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
                            <img className="w-100" src={chapter3Logo} alt="Chapter 2" />
                        </div>

                        {/* Stanzas */}
                        <div className="mb-3 content-mobile-inner">
                            <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">
                                <span className="text-5xl">T</span>he Mustachios are now out of the forest, but what lies ahead is another place, a location with trails of different directions. Exploring this massive area with confusion, they found an old rusty sign saying:
                            </p>
                        </div>
                        <div className="mb-3 content-mobile-inner">
                            <p className="content-mobile text-center font-w-hermann w-hermann-italic mb-0">“Grass Grin Maze:</p>
                            <p className="content-mobile text-center font-w-hermann w-hermann-italic mb-0">where you can be completely lost</p>
                            <p className="content-mobile text-center font-w-hermann w-hermann-italic mb-0">unless you’ll find something of red, blue, and white</p>
                            <p className="content-mobile text-center font-w-hermann w-hermann-italic mb-0">that can be your forever light.”</p>
                        </div>
                        <div className="mb-3 content-mobile-inner">
                            <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">The Mustachios then decided to stick together, terrified that in every turn, some ferocious animal would jump out. They took a left turn, and then two rights. A scarecrow dressed as a snowman pops out. Scared yet motivated to get out of this terrifyingly vast area, they touch the weird scarecrow. One Mustachio even said hello. Nothing but silence followed. There’s no one else but them.</p>
                        </div>                   

                        <p className="text-center font-w-hermann w-hermann-semibold-italic page-num">36</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Chapter 3: Red, White, and Blue</p>

                        {/* Stanzas */}
                        <div className="mt-3 content-mobile-wrap">
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Inside of the scarecrow’s pocket lies a riddle:</p>
                            </div> 
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-italic mb-0">“you can always run in circles</p>
                                <p className="content-mobile text-center font-w-hermann w-hermann-italic mb-0">but the only way is through,</p>
                                <p className="content-mobile text-center font-w-hermann w-hermann-italic mb-0">and lucky is the man</p>
                                <p className="content-mobile text-center font-w-hermann w-hermann-italic mb-0">whose sunlight touches you.”</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">After several attempts to interpret the puzzle, they finally discovered what it meant. Straight ahead, they went through a vine that led to the heart of the maze. Flowers of all kinds and gold-gilded porches, statues, and fountains are found in the area. It almost feels like an ethereal paradise. Their weary bodies and minds found relief in an environment that is the opposite of the dark, bushy chaos that is only ten steps away. It’s a place of serenity and for a minute, they are in awe.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">The sunlight is fading and so it begins. They started to keep looking. They moved every porch and even swam in the fountains, but nothing happened. A statue whose entirety is covered in moss seems to be familiar. “Aha!” said one Mustachio. “This one looks like the Prospector.”</p>
                            </div>
                        </div>

                        <p className="text-center font-w-hermann w-hermann-semibold-italic page-num">37</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Chapter 3: Red, White, and Blue</p>

                        {/* Stanzas */}
                        <div className="mt-3 content-mobile-wrap">
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">So the ten of them cleaned the statue until it shined, and when the last ray of sunlight hit its mustache, a bright lamp appeared out of its heart. This is the Lamp of Direction!</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Door Keeper, the Mustachio who can teleport to different places in a second, was astounded. “A barber pole! And not just a barber pole, but one that can show us which direction we should go next!”</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Weaved from sweet candy crystals, Candy Floss, asked in awe, “Each color moves in different directions! Red, white, and blue? Which way do we go?”</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Looking as green as the grass in the Grass Grin Maze, Verdant Greed, as greedy as he was, wanted to make the Lamp of Direction his own. And so he plotted and plotted, until EVL Guy stopped him in his thoughts.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">As wicked as his name is, EVL Guy is the darkest magician in the land, who is used to playing with fate. “Oh brother, no wonder you’re silent. I can read your thoughts. Now I may like playing with dark magic but sharing the excitement makes the journey even better.”</p>
                            </div>
                        </div>

                        <p className="text-center font-w-hermann w-hermann-semibold-italic page-num">38</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Chapter 3: Red, White, and Blue</p>

                        {/* Stanzas */}
                        <div className="mt-3 content-mobile-wrap">
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">And so the Farmer, the most hardworking one, told the Mustachios to not waste any more second contemplating for an answer, as he still needs to go into the field when dawn arrives.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Now, see, Faun loves to play hide and seek behind the trees. So just being in the Grass Grin Maze is enough, and finding the lamp was even better. He was jumping up and down, all giddied up when Dwinn, the adventurer who loves to win, stomped his feet.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Everyone went silent. “Where do we begin?” As competitive as he is, losing was not an option. And Dwinn knows that the more they spend talking, the longer they’ll stay there.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Frankie Stan, the shadow behind the genius, the one they call sinister, suddenly made a noise. “How about we ask the all-knowing Prospector? I’m sure he’s listening.”</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">So Eddie Crog, the scary-looking one with blood on his face, suspiciously called everyone over to huddle. They wouldn’t budge until Frontline stepped up and scooched over.</p>
                            </div>
                        </div>

                        <p className="text-center font-w-hermann w-hermann-semibold-italic page-num">39</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Chapter 3: Red, White, and Blue</p>

                        {/* Stanzas */}
                        <div className="mt-3 content-mobile-wrap">
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Together they chanted for enlightenment until the Lamp of Direction stopped spinning. They waited and waited, until it started again. This time, all the colors were moving in the same direction, and glowing lights of red, white, and blue came out of the barber pole and guided them towards their next artifact.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Will you be the first and only Mustachio to solve this riddle and get The Lamp of Direction?</p>
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

                {/* Chapter 3 Characters */}
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={candyfloss} alt="Candy Floss" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Candy Floss</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Tweaved from sweet candy crystals he is made,</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Why you ask? That’s the thing his loved ones paid</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">They asked the witch for a child with smooth complexion</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Someone sweet and smart with qualities to almost perfection</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">The child grew up strong, someone way above norm</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He already gained the power to make a candy storm</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">You may think that’s something warm, cute, and sweet</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Sorry to disappoint you, it’s not something you can eat</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">In Mustachioverse, a candy storm is terrible disaster</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">One that’ll turn your properties to powder</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={doorkeeper} alt="Door Keeper" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Door Keeper</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">The door keeper holds a special key</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">With him as your friend, there’s so many possibilities</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He can teleport you to different places</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Think and blink and you’re there in a second</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He’s so powerful that he can see</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Even a place in the past or a memory</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He said there’s a door for every location</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">With some gold, he’ll take you to your destination</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">If you want to go somewhere, he’s your Mustachio</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">There will be no trace, no one can find you</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={dwinn} alt="Dwinn" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Dwinn</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">The adventurer Dwinn loves to win</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He’s very competitive, where do I begin?</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He once cheated in a top-level video game</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Won’t take losing as a choice, won’t ever take the blame</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He loves to compete throughout Mustachioeverse</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Be the number one person in a world that’s so diverse</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Why does he love winning every time?</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Well, for him losing is an unforgiveable crime</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He said “Why would you try when you’re not the best?”</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">“Just stay home, watch TV, and have some rest”</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={eddiecrog} alt="Eddie Crog" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Eddie Crog</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Every night Eddie Crog is out on the streets</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Looking for the next victim, everyone he greets</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">On the outside he looks pretty gentle and calm</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">But he’s always thinking how torturing someone has its charm</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He has different ways to make you feel excruciating pain</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He’ll hurt the physical while playing with your brain</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He said “what is a body without many scars”</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">“What is a mind if it’s not as soft as brittle bars”</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">If I were you, I wouldn’t stay on Elm Street</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Unless you want to be in his galleries, his favorite masterpiece</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={evlguy} alt="EVL Guy" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">EVL Guy</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">EVL guy is this wicked Mustachios name</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">If something goes wrong, he’s usually the one they blame</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He is the dark magician in the land</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Playing with fate is within his hands</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">All his deeds were seen as bad omen</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">They cannot see that’s why he feels broken</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">“Avoid the Mustachio with the skull pendant</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He’ll mess with your mind when he’s militant”</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">They always avoid being with him like a plague</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Not knowing true connection will melt his heart that’s sad</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={farmer} alt="Farmer" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Farmer</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Into the field he goes from dawn till dusk</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Making sure there will always be food in stock</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Every day he would plow the fields</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Tilling the soil to improve the yields</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">The Farmer is the most hardworking one</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Always checking that everything’s done</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Although this man is always busy</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He never forgets quality time with his family</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Loved by many Mustachios, that he can’t deny</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">For he is the ideal person of every girl and guy</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={faun} alt="Faun" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Faun</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Faun loves to play hide and seek behind the trees</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Blend with them properly till no one sees</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He’s a half human half goat creature that loves plants</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">A peaceful, quiet environment is what he wants</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He organized protests to save the wildlife in Mustachioverse</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Warning everyone to be avoid nature’s curse</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He studied several branches of biology</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">To save every single endangered specie</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He warns everyone to take good care of their pet</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Because if he knows you don’t, he’ll send you a threat</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={frankiestan} alt="Frankie Stan" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Frankie Stan</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Frankie Stan is Victor’s weird older brother</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">The shadow behind the genius, the one they call sinister</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Together they’d do some crazy dead experiments</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">With different corpses and bloody embellishments</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">One time Frankie got the measurement wrong</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Made a monster so scary and hella strong</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">They couldn’t find where it went but they don’t mind</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">They said “if there’s news of disfigured bodies our pet we’ll find”</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">“This is our revenge to the whole Mustachioverse”</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">“They’ll know how helpless feels, more monsters we’ll disperse”</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={frontline} alt="Frontline" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Frontline</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Toil and toil around this pandemic trouble</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Getting sick for Frontline is almost inevitable</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">The nature of his work is dangerous</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">For the deadly virus is highly contagious</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Mingling with others could prove to be fatal</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He wishes this situation would not be final</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Overwhelmed by the everything that’s going</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He dreams of a vacation for so long</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He prays every night for the discovery of a cure</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">And things go back to the way it was before</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={verdantgreed} alt="Verdant Greed" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Verdant Greed</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">This Mustachio looks as green as grass</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Don’t argue with him, for he is quite crass</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Fortunately, Verdant Greed was born in a noble family</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">With loving parents who accepts him completely</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He is greedy from the moment he turned one</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He doesn’t want to share his toys with anyone</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">His tutors worked hard to teach him how to be generous</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">They told him he doesn’t need to own everything that’s precious</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">After several years, this Mustachio finally learned his lesson</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">It’s love that makes him happy more than ten mansions</p>
                            </div>
                        </div>
                    </div>
                </article>

                {/* Chapter 4 */}
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <div className="w-1/3 mx-auto mt-5 mb-5">
                            <img className="w-100" src={sagesRant} alt="Chapter 4" />
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
                        <div className="mb-3 content-mobile-inner">
                            <p className="content-mobile text-center font-w-hermann w-hermann-italic mb-0">
                                <span className="text-5xl">"A</span>ll hail the Southern Seas,
                            </p>
                            <p className="content-mobile text-center font-w-hermann w-hermann-italic mb-0">Vested of the powers from the Isle of Rhe,</p>
                            <p className="content-mobile text-center font-w-hermann w-hermann-italic mb-0">A broomstache yearning to be untangled,</p>
                            <p className="content-mobile text-center font-w-hermann w-hermann-italic mb-0">Will you be ready for the wrangle?”</p>
                        </div>
                        <div className="mb-3 content-mobile-inner">
                            <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Setting out on a voyage in the Southern Seas, the Mustachios enjoy the gentle breeze offered by the calm and serene waters. Unbeknown to them the danger slowly raging, waiting for the perfect time to strike.</p>
                        </div>                   
                        <div className="mb-3 content-mobile-inner">
                            <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">As the night befall the Mustachios, chaos arose as none in particular started slamming into their ship, causing it to tip over. Poor little Mustachios, drenched in the cold cold water, falling in the whims of the rip tides.</p>
                        </div>          
                        <div className="mb-3 content-mobile-inner">
                            <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Screams of terror echo through the night as the Mustachios realize the danger they are currently in.</p>
                        </div>          

                        <p className="text-center font-w-hermann w-hermann-semibold-italic page-num">52</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Chapter 4: The Secret of the Southern Seas</p>

                        {/* Stanzas */}
                        <div className="mt-3 content-mobile-wrap">
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Their mistake was they rushed in without analyzing the riddle that was thrown at them by the journal. Oh Broomstache of the Southern Seas, how cruel could you be?</p>
                            </div> 
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">In a place where sploosh and splash can only be heard in motion, where could their savior be?</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Only a sailor’s best friend could get them out of the Cross Sea now</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">“Aha! A comb at rest is as good as a rock!” a Mustachio shouted.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">But a comb in motion set everything in its proper place.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Every single Mustachio already thought as much and so, altogether, they let the current take them deep into its deadly tides to a place where no such wind could take control of the swells.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Lucky for them that there is no undertow in this mess of a Cross Sea. That’s what makes the Broomstache of the Southern Seas special. Although, not a lot knows about it.</p>
                            </div>
                        </div>

                        <p className="text-center font-w-hermann w-hermann-semibold-italic page-num">53</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Chapter 4: The Secret of the Southern Seas</p>

                        {/* Stanzas */}
                        <div className="mt-3 content-mobile-wrap">
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Holding their breath at once, either to conserve their oxygen or to float in reverence, something shiny in the deep abyss. Deep in a coral's mighty grip, a personification of a rock, lies the Charmed Comb, ever so shiny, so elegant, which can untangle almost any knot.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">The Comb’s power apparently knows no boundaries! Even the nonparallel phenomenon that is happening on the surface of the waters above can be cleared by this artifact. Extremely tangled ropes should be no problem. Any direction its keeper desires, thou shall bend to its will.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">For a while, the Mustachios could only gloat in awe at the shining beauty of their savior. However, the reminder of their lung’s capacity, or lack thereof, pushed them to swim further to the suspiciously unguarded comb.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Frosty, who has the greatest advantage in this journey in the Broomstache of the Southern Seas, could only laugh while watching the other Mustachios shiver in the cold, especially Fire Cracker Jack, the one who revels in fire and explosions.</p>
                            </div>
                        </div>

                        <p className="text-center font-w-hermann w-hermann-semibold-italic page-num">54</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Chapter 4: The Secret of the Southern Seas</p>

                        {/* Stanzas */}
                        <div className="mt-3 content-mobile-wrap">
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Ghost Face, ever so dim and lifeless, his face just doesn’t give off what he truly feels, watches the ever brave Ghost Prince, swim faster than any other Mustachio towards the Charmed Comb only to be struck with dismay upon the deathly grip of the coral which holds their savior.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">A Mustachio nearly choked on how comedic and anime-like that scene looked. It appears to be the one and only Ghost, the loner of the group. No one really knows why he stuck with this group but none could care less. Either he’s following the one who murdered him or he’s just trying things he has never tried when he decided to end his life.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">The Almighty King Hobgoblin, who swims in his own luxury, urges the clever tactician and a fan of spooking others, Ghost Clarence and the warrior with unparalleled strength, Dark Knight, to work their magic given their experiences to take out the comb.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">However, a particular Mustachio unfortunately took a fancy to the corals rather than the artifact. Cave Wizard, as out-of-place as he is, started really enjoying the voyage when he took a glimpse of the corals, seeing it as a cursed object, wanting to make it his own weapon.</p>
                            </div>
                        </div>

                        <p className="text-center font-w-hermann w-hermann-semibold-italic page-num">55</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Chapter 4: The Secret of the Southern Seas</p>

                        {/* Stanzas */}
                        <div className="mt-3 content-mobile-wrap">
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Grim, on the other hand, took notice of the evil look adorning Cave Wizard's face, so he smacked him upside the head. While a lot were first intimidated by Grim, he ended up being completely opposite of his name. A valuable member of the Mustachio community, that he is.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">This group of particularly odd ones, strong war veterans, and noble Mustachios, chanted for enlightenment inside their heads for The Charmed Comb to be released in the deadly grip of the ironically friendly-looking corals. Unprecedentedly, the ever so shiny comb started shining even more. Enough to blind its spectators! But the Mustachios never back down from anything. The artifact then started pulsating and slowly started floating away from the coral's grip. Swaying from left to right, treating the square waves above as tangles, just to calm its two raging water systems. </p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Here’s the catch. To which way will The Charmed Comb lead the Mustachios for the next artifact?</p>
                            </div>
                        </div>

                        <p className="text-center font-w-hermann w-hermann-semibold-italic page-num">56</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Chapter 4: The Secret of the Southern Seas</p>

                        {/* Stanzas */}
                        <div className="mt-3 content-mobile-wrap">
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Will you be the first and only Mustachio to solve this riddle and get The Comb for the Molestache of the Southern Seas?</p>
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

                {/* Chapter 4 Characters */}
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={darkknight} alt="Dark Knight" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Dark Knight</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">If you happen to pass by a Mustachio that looks like a zombie</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">That’s probably the famous Dark Knight that you see</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He won so many battles, more than you can count</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">With his mighty strength, no one is paramount</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">When he was younger, He lost one of his eyes because of a ferocious bear</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Later on, he hunted the exact animal in the same forest and killed it there</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He said “messing with me is like a death wish”</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">“If you cross my path, you won’t feel any bliss”</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">The Dark Knight you see it not one to be trifled with</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He’s not going to be merciful until he see you bleed</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={firecrackerjack} alt="Fire Cracker Jack" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Fire Cracker Jack</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">You don’t wanna mess with fire cracker jack</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He’ll burn your house down in an instant attack</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Fireworks and firecrackers are all that he lives for</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He knows every kind, composition, and color</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">If you can’t see him often there’s a reason why</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He’s busy mixing chemicals to make some supply</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">In a bunker he’s attempting to create something crazy</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Probably to make the loudest firecracker there can be</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Why is he like that? Well, he loves all the noise</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He said he prefers it more than hearing everyone else’s voice</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={frosty} alt="Frosty" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Frosty</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Frosty loves the cold the way he loves gold</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">And he doesn’t always listen when’s he’s told</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He said what good would it be to follow every advice</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Not everyone wants your life to be nice</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Frosty wants to make a plantation in his icy location</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Grow fruits and veggies like peaches, carrots, and corn</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He doesn’t want to be nicknamed Frosty the Snowman</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Because he said it’s too basic and he’s not a common man</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">“I’ll live my own life and grown my own food”</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">“Even though I’m stubborn, I know it’s for my own good”</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={ghostclarence} alt="Ghost Clarence" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Ghost Clarence</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Rence the tactician also died in the great war</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">His troops were defeated, they’ve suffered worse by far</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">But Rence’s spirit will not give up easily</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">“My body might be gone, but my soul is still steady”</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">“I’ll scare the opponent’s generals, spook their horses and ponies”</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">“Won’t waste a single opportunity to make them all worry”</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">And so, he went on appearing at their camps at night</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Giving them nightmares when he showed up on their sight</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Ghost Clarence might have been strict and boring when he was alive</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Now he’s having fun and scaring enemies is his vibe</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={ghostface} alt="Ghost Face" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Ghost Face</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Ghost Face is the man who doesn’t have any charm</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He literally lives every day as if life’s a stupid scam</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He’s a man of terror and the whole town knows</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He likes to scare people by dressing up as a killer ghost</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">One day he went out on the streets holding a bloody knife</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Acted as if it’s the most normal thing in everyone’s daylife</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">When did he start to make people scream?</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Well, his past is quite lonely and dim</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">They said Ghost Face was born out of abuse</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">His parents died in an asylum according to past news</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={ghostprince} alt="Ghost Prince" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Ghost Prince</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Ghost Prince died terribly in the great war</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Fighting alongside his knights for what he stood for</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He believes that royalty shouldn’t hide behind castle walls</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">A man should show leadership, have clear and definite goals</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">So, when the war came, he volunteered to go</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">The noble should also fight, that’s what he wants to show</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He clearly is one brave and young ambitious prince</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He said through his actions, the Mustachios he’ll convince</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">But on his death, he had just one wish</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">His ghost may wander to that fair maiden he greatly miss</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={ghost} alt="Ghost" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Ghost</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Ghost was a man of Japanese descent</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">That’s why if a Mustachio watches anime, he’s always present</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">If you see him, he moves somewhat awkward</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">His posture is bad, he also looks kinda haggard</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Well, Ghost lived his life before as a loner</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Even on his birthdays, he’s the one who makes his greeting banner</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Another mystery in the Mustachioverse is how he died</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Cause no one saw him for two years until his corpse they’d find</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Maybe someone killed him and there’s a murderer on the loose</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Or he wanted to end it all and death is what he choose</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={grim} alt="Grim" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Grim</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Grim is the last of reapers in the land</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">A cool guy who can end your life with one flick of his hand</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">At first no one wants to be friend with Grim</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Cause he has this deadly stare as if he’s thinking of a dark scheme</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">But everyone got used to it and loved grim cause he is a funny guy</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">But sometimes he makes scary jokes like “Hey, it’s your time to die!”</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He stopped the dark humor cause it’s making everyone uncomfortable</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">And started helping people by making their last day memorable</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">You think Grim lives a complicated life but Grim is really happy</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He loves his work and a valuable member of the Mustachio community</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={kinghobgoblin} alt="King Hobgoblin" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">King Hobgoblin</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">This powerful enigmatic king loves gold and satin</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He likes everything fancy, there is no denying</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">King Hobgoblin buys the most expensive wines</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">If he invites you to dinner, the best meal you’ll find</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He’s a generous man who likes to share his wealth</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">If he likes you, you’ll probably receive some jewelry and a golden belt</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">But if you meet him, there’s one thing you should know</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">This king won’t tolerate any disrespect that you’ll show</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">So be extra careful with how you behave</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">If you piss him off, you’re digging your grave</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={turfywizard} alt="Turfy Wizard" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Turfy Wizard</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">The wizard sells anything that he thinks is cursed</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He has all the weird trinkets you can see if you are bored</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He’s got different spells for something really wicked</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Artifacts, jewelries, and weapons that look twisted</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He even got potions that’ll transform your enemy into a bug</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Or a necklace that’ll make someone smell like a dead frog</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">You see Turfy Wizard is also a fan of astrology</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He’ll tell you your future in exchange of one hefty fee</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Don’t question his methods though or call him a fraud</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He’ll curse your life and play with it like a gameboard</p>
                            </div>
                        </div>
                    </div>
                </article>

                {/* Chapter 5 */}
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <div className="w-1/3 mx-auto mt-5 mb-5">
                            <img className="w-100" src={sagesRant} alt="Chapter 5" />
                        </div>
                        <p className="text-center text-xl font-w-hermann w-hermann-reg mb-2">CHAPTER 5</p>
                        <h3 className="text-center font-w-hermann w-hermann-semibold">Myst of the Ancient Cellar</h3>
                        <p className="text-center text-xl font-w-hermann w-hermann-semibold-italic ch-footer mb-5">The Sages Rant</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Chapter 5: Myst of the Ancient Cellar</p>
                        <div className="w-1/4 mx-auto mt-3 mb-4 ">
                            <img className="w-100" src={chapter5Logo} alt="Chapter 5" />
                        </div>

                        {/* Stanzas */}
                        <div className="mb-3 content-mobile-inner">
                            <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">
                                <span className="text-5xl">P</span>assing through the drawbridge, the Mustachios heaved a sigh of relief when the carriage finally found its bearing from the bumpy ride they annoyingly know so well.
                            </p>
                        </div>
                        <div className="mb-3 content-mobile-inner">
                            <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">They’re nearing their destination, the infamous abandoned Lady Tickler Castle.</p>
                        </div>                   
                        <div className="mb-3 content-mobile-inner">
                            <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">This castle has its own share of creepy stories and mysteries. The most famous of them all is that Lady Tickler Castle houses magic that is unsettling because no one could foresee how it would be in the future. Not even the most seasoned seer.</p>
                        </div>          
                        <div className="mb-3 content-mobile-inner">
                            <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">It is said to be lined with an air that is both unnerving and enchanting.</p>
                        </div>          

                        <p className="text-center font-w-hermann w-hermann-semibold-italic page-num">69</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Chapter 5: Myst of the Ancient Cellar</p>

                        {/* Stanzas */}
                        <div className="mt-3 content-mobile-wrap">
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">For a castle that has long been abandoned by an unknown ruling family, Lady Tickler Castle looks well maintained, unaffected by time and weather. Well, it is designed to be charming for the onlookers. The one who gets lured in may never be able to come out. But myths like that never fazed Mustachios on a mission as they haphazardly strolled into the castle’s banquet hall.</p>
                            </div> 
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Now, where could something important be hidden in an ancient place such as the Lady Tickler Castle?</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">In the boudoir of the biggest bed chamber? In the library? In the study? In the tower? No, no. Somewhere more unsuspicious should be fitting. All of the Mustachios sat in silence in the impeccably designed parlour of the grand castle thinking of where something magical could be hidden.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">“All this thinking is making me hungry!”</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Some Mustachios were about to head to the kitchen when someone noticed that the walls were moving. Wait, no, letters are the ones moving, not the wall.</p>
                            </div>
                        </div>

                        <p className="text-center font-w-hermann w-hermann-semibold-italic page-num">70</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Chapter 5: Myst of the Ancient Cellar</p>

                        {/* Stanzas */}
                        <div className="mt-3 content-mobile-wrap">
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">“It could be another riddle! But how can we make the letters on the wall form words that are cohesive enough to understand?”</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Raging thunders sounded after a Mustachio uttered those words and after a while, the letters stopped on their own. It read,</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-italic mb-0">“Slip and slam, bewitch a man</p>
                                <p className="content-mobile text-center font-w-hermann w-hermann-italic mb-0">Food for his stomach, spirit in him to track</p>
                                <p className="content-mobile text-center font-w-hermann w-hermann-italic mb-0">Tickle a lady, oh mustache that’s a beauty”</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">After a few moments of contemplating what this riddle meant, there’s only one thing that could make a mustache look so slick and styled. A beard oil, the Slippy Liquid!</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">“A lady can charm a lass through his stomach but nothing could beat a man’s addiction to drinking spirits. It’s that simple,” said Dummy, the fabled right hand man of King Hobgoblin.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">“No, this seems sketchy if it were that easy. Besides, you being of  royal descent is a sham,” argued Jungle. One would think he is also of royalty, but not one Mustachio could recount a monarch with his people, although he does act like a mischievous prince, an entitled one at that.</p>
                            </div>
                        </div>

                        <p className="text-center font-w-hermann w-hermann-semibold-italic page-num">71</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Chapter 5: Myst of the Ancient Cellar</p>

                        {/* Stanzas */}
                        <div className="mt-3 content-mobile-wrap">
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Crimson, great ruler of the Nightosphere, in his thick and sleek smooth voice tried to pacify the situation by saying, “There, there. There shouldn’t be any danger should we interpret it in favor of making it easy for us. There are two options offered by the riddle. It’s either in the kitchen or in the cellar.”</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">The other regals in the room, Hot Dog Prince that everyone is being wary of, King Stellar who’s actually only in search of a possible princess in the castle, and Inka who was once an Egyptian lord, just mumbled their agreement to their fellow ruler.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">At once, all three murder-capable Mustachios chose to head to the cellar in search for the Slippy Liquid.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Jason D Killer, with his mighty machete and an obsession with death, spearheaded the group. His only agenda is to take it quickly to immediately head back to Crystal Lake.</p>
                            </div>
                        </div>

                        <p className="text-center font-w-hermann w-hermann-semibold-italic page-num">72</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Chapter 5: Myst of the Ancient Cellar</p>

                        {/* Stanzas */}
                        <div className="mt-3 content-mobile-wrap">
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Creepy Strawhat also has some organ-hunting errands to do after this adventure for he only arises 23 days every 23 years, so he just followed suit.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Leather Face, with no other identity to show but to be on his hunting one, just silently followed the two to the cellar.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">The rest of the group went in search of the artifact in the kitchen just to come up empty, so Incubus, a dream draining demon, swooshed them all to the cellar using weird motions with his ferocious sceptre.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">The Mustachios were dumbfounded when they saw the scene at the cellar. Lying unconscious on the floor are the three deadly Mustachios who chose to conquer the cellar first.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">“I knew it wouldn’t be this easy!” Obviously, those words came from Jungle.</p>
                            </div>
                        </div>

                        <p className="text-center font-w-hermann w-hermann-semibold-italic page-num">73</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Chapter 5: Myst of the Ancient Cellar</p>

                        {/* Stanzas */}
                        <div className="mt-3 content-mobile-wrap">
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">What other mystery does Lady Tickler Castle have in store for the Mustachios just to hinder their search of the Slippy Liquid?</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Will you be the first and only Mustachio to solve this riddle and get the Slippy Liquid?</p>
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

                {/* Chapter 5 Characters */}
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={creepystrawhat} alt="Creepy Strawhat" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Creepy Strawhat</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Keep your organs in check</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">For the one in search of it arises 23 days every 23 years</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">A monster raised in the depths of hell</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Creeping for victims no one could ever tell</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Scaring is his favorite game</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Mustachios pray they don’t end up his prey</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Spring is his favorite season</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">The perfect time for him to creep on</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">The reason behind his endeavors are unheard of</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Truly a monster he is to be afraid of</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={crimson} alt="Crimson" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Crimson</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Nightosphere is his domain</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">A great ruler albeit full of disdain</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">A crisp clean suit adorning his highness</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Quite peculiar for him in a place brimming of mess</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Been alive since the ancient times</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Surely, he is a foe one had no ties</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Crossing him is something no one would phatom</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">For doing so will always result in irreversible doom</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">No one knows his heartaches, but one thing is for sure</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He is yearning for his daughter’s love that is obscure</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={dummy} alt="Dummy" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Dummy</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Vested with the right to stand next to the Goblin King</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">A loyal servant seems to be more fitting</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Dummy’s story is unknown</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">His ties with others showing no signs it has grown</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Errands for the King he ought to pursue</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">For he only knows the repercussions in refusing to do so</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Incredulous for his participation</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">The Council could only watch in anticipation</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">The downfall in transit of the Great Dummy</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Coming so slow for a number of his enemy</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={hotdog} alt="Hot Dog Prince" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Hot Dog Prince</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">The warm looking Hot Dog Prince wanders all about</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">For what? Only he knows the answer to that</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Many have tried inquiring</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">But his oddly jolly personality rendered that outshining</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">A happy virus that he is</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Leaning more to the virus some other fears</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Hot Dog people are a possible sub-species of Dog</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Friendly or lethal, he is capable of just running rouge</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He could be a monarch in the making</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">But is Hot Dog Prince meant for that while he’s living?</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={incubus} alt="Incubus" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Incubus</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Holding you prisoner in your moment of respite</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Do not dare to dream in front of Incubus despite</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Lurking in the deep shadows, a Mustachio with one need</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">A dream from his victims, the one he shall succeed</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Fret not as he doesn’t attack</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">But sod off before he takes you out with one pack</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">With his mighty sceptre, many suspects him to be of royal descent</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Mayhap no answers can be given for Incubus only shouts words of dissent</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He drains to pick at random</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Does he do it to avoid suspicions of his ruledom?</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={inka} alt="Inka" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Inka</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Remnants of his time buried to be sanctified</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Fury at the pit of his stomach lies, waiting to be rectified</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Who has caused his death?</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Who believed he needed to be sanctified?</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Betrayal is something he has truly experienced</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Roars of his people, with him as the receiving end</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">A life anew he wishes as a development</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">But he is crippled with the undwindling fear and resentment </p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">A Lord starting from his birthright</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">The ire of his people, did he ever deserve that attrite?</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={jasondkiller} alt="Jason D Killer" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Jason D Killer</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">His obsession with death is highly alarming</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Guarding Crystal Lake, his machete at work is truly spine-chilling</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He only leaves his shack for adventure and to end intruders</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Be careful not be one of Crystal Lake’s dwellers</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Not a fan of nosiness</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Only doom is met when one gets trapped on his craziness</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Invincible he is not</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">There lies a weakness he’d not dare he’d forgot</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">One his own kin can only send him to oblivion</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">So he makes sure to always be reborn</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={jungle} alt="Jungle" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Jungle</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">The jungle is where he feels free the most</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">It is somewhere he could never be lost</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Him wearing a crown of skull sends shiver towards anyone’s spine</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">In front of Jungle, make sure not to do anything out of line</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">His purple hair is much to his dislike</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">So he puts it up in a way that he’d probably like</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Bumps on his hair could mean a thing or two</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">But no one really knows what he could be up to</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He is one among the mischievous looking Mustachio</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">But would that title be something he could live up to?</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={kingstellar} alt="King Stellar" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">King Stellar</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">As bleak as his appearance</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Pray tell, this King has lived for centuries</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">His fancy, a nuisance for princesses</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">His love showing thousands of phases</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">No one could handle the extent of his affection</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">For he is a man who does his thing in any situation</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">His parlour serving no other purpose</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Than for this lonesome fellow to wallow in solo</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">His image is clouded with judgement</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Yet as harmless as he is, desperation could only suffice his fulfillment</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={leatherface} alt="Leather Face" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Leather Face</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">The one of horror called Leather Face</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He kills out of fear, not of malice</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">As recurring as a villain as he is</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He takes orders from his older family members he wishes to please</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">A Chainsaw and a Sledge Hammer are his precious weapon</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">One ought to never cross him for you could easily be someone he’d leap on</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">His personality is based on his mask</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Without it, nothing in him is in tact</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Just a lost soul yearning to be found</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">To express a self that is finally bound</p>
                            </div>
                        </div>
                    </div>
                </article>

                {/* Chapter 6 */}
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <div className="w-1/3 mx-auto mt-5 mb-5">
                            <img className="w-100" src={sagesRant} alt="Chapter 6" />
                        </div>
                        <p className="text-center text-xl font-w-hermann w-hermann-reg mb-2">CHAPTER 6</p>
                        <h3 className="text-center font-w-hermann w-hermann-semibold">The Chaos by the Tavern</h3>
                        <p className="text-center text-xl font-w-hermann w-hermann-semibold-italic ch-footer mb-5">The Sages Rant</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Chapter 6: The Chaos by the Tavern</p>
                        <div className="w-1/4 mx-auto mt-3 mb-4 ">
                            <img className="w-100" src={chapter6Logo} alt="Chapter 6" />
                        </div>

                        {/* Stanzas */}
                        <div className="mb-3 content-mobile-inner">
                            <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">
                                <span className="text-5xl">E</span>ntering an unfamiliar and hostile district is an easy feat for the adventurous Mustachios. They’ve done it countless times in their individual journeys. However, unlike the first artifacts introduced, this one comes with a lot more risk.
                            </p>
                        </div>
                        <div className="mb-3 content-mobile-inner">
                            <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">The only clue given to them was that this artifact doesn’t stay in one place. They always have to be on the lookout for something out of the ordinary. They’ve been to countless places just for this certain artifact. Mountains, rivers, forests, caves, even manors were conquered for just one mischievous artifact.</p>
                        </div>                   
                        <div className="mb-3 content-mobile-inner">
                            <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Their search continued ‘til the winter season in a busy village.</p>
                        </div>          
                        <div className="mb-3 content-mobile-inner">
                            <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">They decided to stay for a much needed respite, and a bit of fun too while at it.</p>
                        </div>          

                        <p className="text-center font-w-hermann w-hermann-semibold-italic page-num">86</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Chapter 6: The Chaos by the Tavern</p>

                        {/* Stanzas */}
                        <div className="mt-3 content-mobile-wrap">
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Whiskers Village is known to be the busiest district in the MustachioVerse with hustles and bustles left and right, at any time of the day and year.</p>
                            </div> 
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">One can never be too bored in such a place!</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Trying to enjoy their off-time in the tavern seemed like an impossible task when all the Mustachios can think about is the artifact that just couldn’t stay still.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Does it have the power to teleport?</p>
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Does it have an entity in itself?</p>
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Is it possessed by a mighty being?</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Or...</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Is the Prospector disguising himself as a traveling merchant so no one would suspect of the precious artifact he always carries?</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Hmm… a cape-like barber’s cloth.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Aha! Could it be the Robe of Protection?!</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">*Ding* sounded the doorbell. Another seemingly creepy individual entered the tavern.</p>
                            </div>
                        </div>

                        <p className="text-center font-w-hermann w-hermann-semibold-italic page-num">87</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Chapter 6: The Chaos by the Tavern</p>

                        {/* Stanzas */}
                        <div className="mt-3 content-mobile-wrap">
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Oh, it’s just a traveling merchant here for the winter auction.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">This one, however, did not seem to be cold at all despite all the accessories adorning his fit. It’s like he’s just trying to fit in but couldn’t really care less.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">The only other person in the pub who doesn’t get affected by cold is Frozen Sundae. Of course, because he enjoyed making it a couple degrees lower for everyone while trying to act inconspicuously. What a conflicting Mustachio.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Lullaby, the main act of the night who makes everyone swoon over her melodic voice, acted nonchalant while still keeping the ambience merry for everyone. It was an impromptu performance because everyone recognized the popular singer and she couldn’t deny their requests. That’s how she stays so humble despite the fame.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Lisby, who also jumped on to the impromptu job of bartending, kept her ears open because apparently,  the best secrets are shared in the bar counter. She subtly exchanges messages with Lizzard Prince, the best Mustachio for valuable information.</p>
                            </div>
                        </div>

                        <p className="text-center font-w-hermann w-hermann-semibold-italic page-num">88</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Chapter 6: The Chaos by the Tavern</p>

                        {/* Stanzas */}
                        <div className="mt-3 content-mobile-wrap">
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">While the rest are just enjoying themselves, Squarehead seems to be really annoyed about something. Ever since they arrived in the village, every local has been fawning over her and some are really determined to have her attention. What else can they do? It’s rare for Whiskers Village to have such big doe eyes come by. Unfortunately, they’re underestimating her skills which makes her so mad.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Forest Lord who is always on the lookout for something amiss in his environment was the one who alerted the other Mustachios of the suspicious merchant. Naturally, he and his people always look out for danger to prevent mischief and damage to nature. By his side is his most trusted soldier, Forest Warrior. If it wasn’t for the Forest Lord, he’d rather just stay in the forest but he recognizes that the safety of the Forest Lord is the safety of his home.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">The two drunkards who always make fun of the others are now laughing their asses off after tripping another drunk local. “Life is just one hectic comedy movie,” uttered Leprechaun, a very extroverted fellow who just brings fun everywhere he goes. The other Mustachios are just afraid of him pouring his guts out on that very big pot he carries after drinking so much.</p>
                            </div>
                        </div>

                        <p className="text-center font-w-hermann w-hermann-semibold-italic page-num">89</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Chapter 6: The Chaos by the Tavern</p>

                        {/* Stanzas */}
                        <div className="mt-3 content-mobile-wrap">
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">“Stop being so boring and for once do something crazy!”</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Dragged by Leprechaun’s antics, LSP could just nod throughout his hiccups. Everybody knows that LSP is just trying his best so they just let him be. Although they’re all wondering if the reason for him drinking and agreeing with Leprechaun is for himself or for others again.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Despite all that chaos, everyone is acting so unbothered but they all remain alert. The master of chaos, however, could not just stay still.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">LichKing, the embodiment of all evil, ran up to the mysterious merchant only to have him teleport to the door. He just couldn’t wait for the auction! What an idiot!</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">The mystery guy’s movements prompted everyone to jump in action. The dude just confirmed their suspicions!</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">They all ran towards the door to the outside of the tavern to get a hold of the merchant. Unfortunately, all they got a hold of was the guy’s satchel which contains a dirty long rag and a missive.</p>
                            </div>
                        </div>

                        <p className="text-center font-w-hermann w-hermann-semibold-italic page-num">90</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Chapter 6: The Chaos by the Tavern</p>

                        {/* Stanzas */}
                        <div className="mt-3 content-mobile-wrap">
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">The missive contains cryptic words that says,</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-italic mb-0">“For one to wield the power of the Robe of Protection, take the rag and bring out its most powerful potential.” </p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Unbelievable. What was the Prospector thinking?</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Turning the rag into the Robe of Protection? And without much of a clue?</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Another question... how the hell can someone do that?</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Will you be the first and only Mustachio to solve this riddle and get the Robe of Protection?</p>
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

                {/* Chapter 6 Characters */}
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={forestlord} alt="Forest Lord" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Forest Lord</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Deep in the forest, there lives a king unknown to many</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">They don’t know sometimes that’s why they feel uncanny</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">When a Mustachio visits the areas filled with deep, dark trees</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">They’ll have that feeling that there’s probably something amiss</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">The forest people will watch over hikers and campers for hours</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Prevent mischief and damages to plants, animals, and flowers</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">The Forest Lord makes sure that no one will burn down his home</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He rules the forest world and takes care of everyone like his own</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He creates these celebrations invisible to an ordinary Mustachio</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">But if you’re kindhearted and pure, he’ll probably invite you.</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={forestwarrior} alt="Forest Warrior" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Forest Warrior</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">The protector of the forest, warrior of the trees he is called</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He is the Forest Warrior waiting for the command from the Forest Lord</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He is more than someone who has martial art skills</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He’s innovative and he invented the wheel and the mills</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">A natural-born engineer is this strong and bold Mustachio</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He creates these projects for their people like the radio</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Why does he stay in the forest when he’s very smart and creative?</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He said he loved nature more than the city and he is quite conservative</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">The Forest Warrior said living there is the best decision he made</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">His life has been blissful and peaceful, he believes it is an upgrade</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={frozensundae} alt="Frozen Sundae" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Frozen Sundae</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">There is no ice but its freezing, it’s because Frozen Sundae is coming</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He’s made of sweet treats, colorful sprinkles, and chocolates that are chilling</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Frozen Sundae loves making everyone feel cool</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">But just because he’s chill, doesn’t mean that he’s a fool</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Once he became so furious with an arrogant and rude person</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He made him feel really cold until he couldn’t take any action</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">You see Frozen Sundae is a man that can easily be your friend</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">But if you become his enemy, he’ll take you down, rules he’ll probably bend</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He’s the two sides of a coin: powerful, caring, cruel and sweet</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Just pray that you have a good impression when the two of you finally meet</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={leprechaun} alt="Leprechaun" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Leprechaun</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">There are no gold coins at the end of a rainbow</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Just a Leprechaun who wants to greet you, you know</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He is just a weird Mustachio holding a very big pot</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Pouring colors into the sky when it rains after the weather is hot</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">The Leprechaun mostly prefers colors green and yellow</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He’s a bit funny and has a personality that is mellow</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">If you need to bring someone extroverted and fun to a party,</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">This one should be it; he also dresses quite fancy</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">The Leprechaun says “Life is just one hectic comedy movie”</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">“Stop being so boring and for once do something crazy”</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={lichking} alt="LichKing" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">LichKing</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">The LichKing embodies everything absolutely evil,</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">A long time ago, he was magically sealed in a castle</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Now that he’s free, he wants to be the chief cause of chaos</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He said he’s gonna mess things up again to show who’s the boss</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">This Mustachio is the reason behind life-long terrible quarrels,</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He spread nasty rumors to different communication channels</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">This dangerous LichKing makes everyone feel bad about themselves</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Gives you angry thoughts that makes you wanna punch the shelves</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">If you can’t remember why you are so furious, that’s the sign</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">You are under LichKing’s spell, being fine will take a long time</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={lisby} alt="Lisby" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Lisby</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Lisby is the Mustachios greatest and finest bartender,</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">She can make any drink that will make your mood better</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">This Mustachio loves working in the bar</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">She fulfilled her dream, she had come so far</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">When Lisby was a child, she barely had any food</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">But now she’s famous, and in her work, she’s so good</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">She’s a living testament that hard work pays off</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Now she spends her weekends playing golf</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">“You are capable of reaching your dreams,” Lisby said</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">“Don’t ever give up and always pray before you go to bed”.</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={lizzardprince} alt="Lizzard Prince" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Lizzard Prince</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">This Mustachio dwells in the catacombs with the lizard people</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He is a generous ruler: just, kind, fair, and noble</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">If you want to know what’s happening down below</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Lizzard Prince is the person you need to go</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He has ears on all Mustachioverse and is updated on every news</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Knows what everyone thinks, especially their different views</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He’s the man when you want a background check on someone</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">The fee is cheap and it won’t take a day to get it done</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Lizzard Prince believes that we should make information accessible</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Honesty and transparency are a few that belongs in his principles</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={lsp} alt="LSP" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">LSP</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">LSP is the kind of Mustachio that’ll make fun of you</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Not because he’s rude but because he is always blue</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He’s the man who smiles on the outside but is actually sad</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He’s experienced several traumas and thinking about it makes him mad</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">LSP needs help because he’s hanging by a thread</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">There are always some self-harm thoughts in his head</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He might look okay but he’s really depressed</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">But every day, he still smiles and tries his best</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Then one day he finally decided to go to therapy</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Cried a bucket, but started his healing journey, finally</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={lullaby} alt="Lullaby" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Lullaby</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Lullaby is a great storyteller through the tunes she plays</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">She is a famous singer, someone with a pretty face</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">If you hear a beautiful melody you haven’t heard before</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">That’s probably Lullaby who is making you happy for sure</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Her father said she started singing when she was three</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">She would hum these myths of the Great Jubilee</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Now she makes every stage hers and makes songs that are such a hit</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Whenever you listen to her, you’ll probably want to dance to the beat</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Lullaby may be a famous beautiful pop star now</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">But she’s still humble and helps poor children as her vow</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={squarehead} alt="Squarehead" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Squarehead</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">This is someone you don't wanna step into</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Because this Mustachio can really obliterate you</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Squarehead may look like a children’s beautiful toy</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">But anything she puts her mind into, she can destroy</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">She is so tired of hearing looking pretty means someone is weak</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">That she should just focus on her looks and her thoughts she shouldn’t speak</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">She made sure that her skills are as deadly as her beauty</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">She’s not scared of the threats and continues her advocacies</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Squarehead is the epitome of someone who is almost perfect</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">What’s only missing in her life is a partner who matches her intellect</p>
                            </div>
                        </div>
                    </div>
                </article>
                
                {/* Chapter 7 */}
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <div className="w-1/3 mx-auto mt-5 mb-5">
                            <img className="w-100" src={sagesRant} alt="Chapter 7" />
                        </div>
                        <p className="text-center text-xl font-w-hermann w-hermann-reg mb-2">CHAPTER 7</p>
                        <h3 className="text-center font-w-hermann w-hermann-semibold">The Conspiracy at Aeolian</h3>
                        <p className="text-center text-xl font-w-hermann w-hermann-semibold-italic ch-footer mb-5">The Sages Rant</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Chapter 7: The Conspiracy at Aeolian</p>
                        <div className="w-1/4 mx-auto mt-3 mb-4 ">
                            <img className="w-100" src={chapter7Logo} alt="Chapter 7" />
                        </div>

                        {/* Stanzas */}
                        <div className="mb-3 content-mobile-inner">
                            <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">
                                <span className="text-5xl">W</span>ith no escape from the scorching sun and the occasional sandstorms the desert forced upon them, this journey is by far the most dreadful one for the Mustachios in search for yet another artifact.
                            </p>
                        </div>
                        <div className="mb-3 content-mobile-inner">
                            <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">They were told that the Dirt Squirrel Desert is the most barren of all the deserts in MustachioVerse.</p>
                        </div>                   
                        <div className="mb-3 content-mobile-inner">
                            <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">It doesn’t have any oases, nomads, and pompous cities which is why travelers avoid Dirt Squirrel Desert. For that reason, the Mustachios chose the Dirt Squirrel Desert as a place hiding an important artifact.</p>
                        </div>          
                        <div className="mb-3 content-mobile-inner">
                            <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">The Mustachios’ mind apparently just works differently.</p>
                        </div>          
                        <div className="mb-3 content-mobile-inner">
                            <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">After days of travel without success, the Mustachios are nearing their limit when they notice the new sand dune from where they started by the road.</p>
                        </div>          

                        <p className="text-center font-w-hermann w-hermann-semibold-italic page-num">103</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Chapter 7: The Conspiracy at Aeolian</p>

                        {/* Stanzas */}
                        <div className="mt-3 content-mobile-wrap">
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Sand dunes can take up to a month to form, but they’ve only been there for less than a week. </p>
                            </div> 
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">The sudden realization had them running up the top of the large sand dune but to no avail, they just kept sliding down.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">“How about we make an erosion through the sides?”</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">“Cut through the sand sideways?”</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Now that they may be close to their goal, they then started to use all the techniques they know to cut through the sand dune.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">After an excruciating time of putting all their energy into making an erosion, the sand dune finally revealed pillars of an ancient ruin. The lost civilization of Aeolian!</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">The Mustachios are finally making sense of the situation. They’ve been feeding themselves the clues all along!</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Among all the artifacts, only one thing could be used to “cut” through sands.</p>
                            </div>
                        </div>

                        <p className="text-center font-w-hermann w-hermann-semibold-italic page-num">104</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Chapter 7: The Conspiracy at Aeolian</p>

                        {/* Stanzas */}
                        <div className="mt-3 content-mobile-wrap">
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">They’re in search of The Scissors!</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Now, where could it be?</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">They might as well have been handed a skeleton with how bare the place is.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Disheartened by the sight, Onku could only pray at the sight of the ruin. He is a peacemaker so the sight makes him wonder how the citizens here couldn’t survive whatever they went through. </p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Moving closer to the pillars, they noticed a pattern.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Even if Neos does not speak much to avoid criticism, he still found courage to say, “Four of the pillars have carvings on them, while the remaining ones have silk smooth surfaces. The four pillars are corners which make a square. What could this mean?”</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">No one answered him as they were all suspicious of him but they all made sense of what Neos said. He is from the future after all.</p>
                            </div>
                        </div>

                        <p className="text-center font-w-hermann w-hermann-semibold-italic page-num">105</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Chapter 7: The Conspiracy at Aeolian</p>

                        {/* Stanzas */}
                        <div className="mt-3 content-mobile-wrap">
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">They all decided to send the four most skilled in battle to each of the pillars to check the carvings. Out of all the warriors, only Ninja has the great advantage to move back in case anything happens, plus his outfit is too eye-catching, it would be easy to pinpoint his location in any case.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Merman Warrior moves best on water so he’s a bit wobbly but still poses as a warrior nonetheless. “Glory to Merman Warrior!” he shouts while wobbling closer to another pillar.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Mountain Warrior who only moves on instinct immediately touched the pillar, causing an earthquake to happen so he immediately removed his hand.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Upon removing his hand, they all started to sink! A quick sand!</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Thank goodness the moment was short-lived when all the four warriors, including Mountain Warrior 2, the one ruled by logic unlike Mountain Warrior, held on to the pillars.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">“Hah! Y'all would have to hold on till the end!” laughed Marci, the cool Queen full of mischief.</p>
                            </div>
                        </div>

                        <p className="text-center font-w-hermann w-hermann-semibold-italic page-num">106</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Chapter 7: The Conspiracy at Aeolian</p>

                        {/* Stanzas */}
                        <div className="mt-3 content-mobile-wrap">
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">“Shh,” uttered by the embodiment of contrast, Mexico. He may be death but he chooses to  honor it lightly rather than depressingly. He’s a fellow peacemaker so he gets along well with Onku.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Magic man, another Mustachio of contrast who can perfectly wield consciousness, was the first to move to the center of the ancient ruins and pick up the clay tablet resting atop an elevated platform.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">“Dwell deeper than before</p>
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Oh mighty soldier skilled than more</p>
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Below is a treasure you can never ignore</p>
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Be warned for it can shake you to the core</p>
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">But leaving without regrets is your call for sure”</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Seems easy enough to understand.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">All but the four warriors holding on to the pillars dismantled the table-like elevated platform to reveal the blinding, majestic looking pair of scissors!</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">“Here it is! The Scissors!” </p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">All of them rejoiced at the sight of another artifact they found.</p>
                            </div>
                        </div>

                        <p className="text-center font-w-hermann w-hermann-semibold-italic page-num">107</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Chapter 7: The Conspiracy at Aeolian</p>

                        {/* Stanzas */}
                        <div className="mt-3 content-mobile-wrap">
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">But, there is still another pressing matter to deal with.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">“So..uhm. How do we get out of here without this place falling apart? You can’t just leave us here holding on to these pillars forever,” said Merman Warrior.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">“Actually, we can,” Nightmare replied in a sadistic manner. Those are his first words ever since the journey. He really does uphold his name. He brings nightmares to everyone. He recognized that he had little to no advantage here since no one is willing to rest, so he conspired with Magic Man.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">“Right, Magic Man? You can finally wield their consciousness now so we can get the heck out of here.”</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Everyone was filled with dread except the two. Are they really going to betray their fellow Mustachio? Is that what the riddle meant by “leaving without regrets?”</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Will you be the first and only Mustachio to solve this riddle and get the Scissors?</p>
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

                {/* Chapter 7 Characters */}
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={magicman} alt="Magic Man" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Magic Man</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">A master that can wield your consciousness</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Rubbed on the wrong way and you’ll find yourself under his prowess</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Magic Man is a Mustachio to be afraid of</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">All he does is spend his time being aloof</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">One might think he is all fun and games</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">How ironic cuz you’d first have to play charades</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">All the bright colors suit him</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">But something dark is brewing interim</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">To Mustachios he can be mean</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">For animals, a soft heart is redeemed</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={marci} alt="Marci" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Marci</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Marci is a very cool Mustachio</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">The youth considers her someone they look up to</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Music is her escape and sanctuary</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Her battle axe turned electric bass is also a necessity</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Severing her relationship with her family was nothing but easy</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">For she thinks they have all left her alone in misery</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Marci is not entirely bad</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Only through mischief can she hide why she’s sad</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Her appearance shows nothing of the Queen she is</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">But her power should never be in question of hypothesis</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={mermanwarrior} alt="Merman Warrior" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Merman Warrior</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">A warrior of the sea, a protector comes to be</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Merman Warrior is your Mustachio for every swimming spree</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">The tales of his bravery goes a long way</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">“Glory to Merman Warrior!” is heard every naval warfare they say</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">With his mighty harpoon, he scurries</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">To those big challenges he no longer worries</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">With water sloshing around him all the time</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">On land, he often walks like a slime</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Sea surface creatures rely on him for safety</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">But who can he rely on for his sanity?</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={mexico} alt="Mexico" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Mexico</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Out with the morbidity, in with the artistry</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Mexico shines on Dia de los Muertos, the day he can be most lively</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">The death wears candy skull colors</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">The ones bright enough for him who adores</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">His lethal scythe acts contrary to his voice</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">An explosion of colors and life-affirming joys</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He despises halloween</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Says it’s too depressing to take part in</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Dia de los Muertos is more of his game</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Symbolizing all the glory to his name</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={mountainwarrior} alt="Mountain Warrior" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Mountain Warrior</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">No rough terrain could serve as a problem</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">As every crevice is carved on Mountain Warrior’s system</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He moves swift and precise</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">But only his wits can cause his demise</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He admits to not being the sharpest tool in the box</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">But his instincts on danger makes him move like a fox</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Abandoned by the rest of his family</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">On animals he finds the love and serenity</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He may serve well in the back of the pack</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">But not one can see any Warrior skill he could lack</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={mountainwarrior2} alt="Mountain Warrior 2" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Mountain Warrior 2</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Another warrior of the mountain emerges</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">This could be the one who could hold grudges</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He may look like he is always frowning</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">His appearance not far fetched from the attitude he is showing</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He can also move over any rough terrain</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">A skill common to all Mountain Warriors</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He’s the one most likely to lead an army</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He has the wits and skills but sadly no empathy</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He may be a perfect warrior for wars</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">But he worries a lot as he looks up to the stars</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={neos} alt="Neos" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Neos</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Neos is a Mustachio from the future</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He just sometimes serve as an eye-sore</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He refuses to talk about the unfolding</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">That’s why everyone always suspects him of cheating</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He doesn’t talk foreign though</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Thank goodness for Mustachios can be quite thorough</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Dealing with suspicions left and right</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He can’t seem to take a break from all the fight</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">But unlike his supposed ancestors, he is calm and collected</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Sparking hope that the future may be full for the gifted</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={nightmare} alt="Nightmare" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Nightmare</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Dreams do come true, as well as nightmares too</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He who haunts in your sleep, will be your reality in a slip</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He hides in your deepest desires</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Your vulnerable time is the only thing he requires</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Quite misunderstood he might say</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">But his mischief is always on display</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Why does he revel on nightmares, you ask?</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">A silly reason, he can never multitask</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Life for Nightmare is simple</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">What happened to him to make him that evil?</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={ninja} alt="Ninja" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Ninja</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Be inconspicuous he aims</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">So he chose the color lighter than flames</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">No one dares to tell him otherwise</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">That his outfit is too catching for the eyes</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">His scar scares away the threateners</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">But his skills for katana scares away the murderers</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He prefers traveling alone</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">In groups, he just can’t watch his tone</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He is a well-respected warrior among his peers</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">But his back is always met with countless sneers</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={onku} alt="Onku" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Onku</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Onku travels to spread the word of peace</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Because he just wants all the fight to cease</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">“Everyone has their own demon.” he says</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">“But everyone can fight them anyways”</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Even his stature exhibit his calmness</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Although he doesn’t tolerate rudeness</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Onku is such a fellow to be comfortable with</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">You might even think achieving peace can’t be a myth</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He is the last of the mountain monks in MustachioVerse</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Unfortunate as he may be, he can never resort to his own curse</p>
                            </div>
                        </div>
                    </div>
                </article>

                {/* Chapter 8 */}
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <div className="w-1/3 mx-auto mt-5 mb-5">
                            <img className="w-100" src={sagesRant} alt="Chapter 8" />
                        </div>
                        <p className="text-center text-xl font-w-hermann w-hermann-reg mb-2">CHAPTER 8</p>
                        <h3 className="text-center font-w-hermann w-hermann-semibold">What Confides in The Land Of Colossus</h3>
                        <p className="text-center text-xl font-w-hermann w-hermann-semibold-italic ch-footer mb-5">The Sages Rant</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Chapter 8: What Confides in The Land Of Colossus</p>
                        <div className="w-1/4 mx-auto mt-3 mb-4 ">
                            <img className="w-100" src={chapter8Logo} alt="Chapter 8" />
                        </div>

                        {/* Stanzas */}
                        <div className="mb-3 content-mobile-inner">
                            <p className="content-mobile text-center font-w-hermann w-hermann-italic mb-0">
                                <span className="text-5xl">"</span>All is well deep down in a swirling duel
                            </p>
                            <p className="content-mobile text-center font-w-hermann w-hermann-italic mb-0">A cup from the sea, reflect your light on mercury”</p>
                        </div>
                        <div className="mb-3 content-mobile-inner">
                            <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">All Mustachios may be adventurous, but not all are self-destructive.</p>
                        </div>                   
                        <div className="mb-3 content-mobile-inner">
                            <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Everyone is aware of the danger that awaits brazen Mustachios wandering into the Crumb Catcher Cave inside the Land of Colossus. As no Mustachio has ever come out to tell the tales on the Crumb Catcher Cave, they’re basically going into a battle in utter oblivion.</p>
                        </div>          
                        <div className="mb-3 content-mobile-inner">
                            <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">But did that stop the highly determined Mustachios? No.</p>
                        </div>          
                        <div className="mb-3 content-mobile-inner">
                            <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">For a giant’s cave, they never thought that the opening would be so small. They literally had to enter it one by one!</p>
                        </div>          

                        <p className="text-center font-w-hermann w-hermann-semibold-italic page-num">120</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Chapter 8: What Confides in The Land Of Colossus</p>

                        {/* Stanzas */}
                        <div className="mt-3 content-mobile-wrap">
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">The cave was eerily silent which made them all anxious, on top of being met with a pitch-black atmosphere.</p>
                            </div> 
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">After a while of walking in knee-deep mud, holding onto narrow walls, they finally sighted a light at what seems to be a long tunnel.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Now, this is the Crumb Catcher Cave.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">The cave was majestic! They arrived at the perfect time when the sun is at the perfect angle to shine light beams from what happened after a cave roof collapse.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">It felt so surreal.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">But, the cave was so empty. There were no other passages aside from the one they already went through.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Where are the giants? What artifact are they trying to get there?</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Suddenly, there was a shrill scream! The ground started to shake too!</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Some Mustachios were about to step near the threshold of the cave, but then…</p>
                            </div>
                        </div>

                        <p className="text-center font-w-hermann w-hermann-semibold-italic page-num">121</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Chapter 8: What Confides in The Land Of Colossus</p>

                        {/* Stanzas */}
                        <div className="mt-3 content-mobile-wrap">
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">“Wait! There’s water! It’s not just a swamp. It looks bottomless!”</p>
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">“Our reflection is very clear!”</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Did someone say reflection?</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Are they in search of The Mirror?</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">With no other way to escape the crumbling cave and the ear-splitting scream, all of them decided to just jump in the water, spearheaded by, of course, no other than Paddle who loves diving under the sea.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Surprise, surprise, they all landed on hard ground! Only Peco Rider landed safely though, with the help of Peco-Peco, the beast only he had the ability to tame.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Looking above them, they could still see the water.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">“What the hell is going on?” said Paratrooper. He may seem upset but in truth, he is actually happy to have landed on land instead of water. He wants to be a bird, not a fish. Pilot would surely agree with Paratrooper’s thoughts. Flying is, after all, their life.</p>
                            </div>
                        </div>

                        <p className="text-center font-w-hermann w-hermann-semibold-italic page-num">122</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Chapter 8: What Confides in The Land Of Colossus</p>

                        {/* Stanzas */}
                        <div className="mt-3 content-mobile-wrap">
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">“What are we going to do now? It’s already nearing dusk. How are we even going to get out of this place?” voiced out the concerned PanCake Prince, one among the nicest nobility.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">“We’ll just have to spend the night here obviously, genius,” Penny bitterly replied. He was never a fan of the wealthy, says they all just revel in cruelty, hence why he’s been indifferent towards PanCake Prince since the start of their journey.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">PanCake Prince abruptly went on his knees after that. What happened to him?</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Meanwhile, you can hear Loonywise snickering in the background. Did he just play with PanCake Prince’s mind? </p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">When PanCake Prince looked back up, his teary eyes immediately went to Penny. </p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Penny was livid! Loonywise just showed his trauma to PanCake Prince!</p>
                            </div>
                        </div>

                        <p className="text-center font-w-hermann w-hermann-semibold-italic page-num">123</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Chapter 8: What Confides in The Land Of Colossus</p>

                        {/* Stanzas */}
                        <div className="mt-3 content-mobile-wrap">
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Penny was furiously reaching for the smirking Loonywise when Peppermint Butler came in between them and said, “We don’t have time for silly tricks here. You’d know if you were wise enough. You could’ve started reading books about those attitudes.”</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Well, that did the trick.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Out of the corner of Pumpkin Man’s eye, who is unusually quiet when he is normally boisterous and mischievous, is BubbleGum, who is still awestruck with the water floating above them. BubbleGum is a brilliant chemist, always in search of something new, so everyone always considers his thoughts in a mission.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">“I can still see our reflection in the water even when there’s no light down here for our reflection.”  </p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-italic mb-0">“All is well deep down in a swirling duel</p>
                                <p className="content-mobile text-center font-w-hermann w-hermann-italic mb-0">A cup from the sea, reflect your light on mercury”</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">A Liquid Mirror? It doesn’t make any sense. How can Mustachios make use of that?</p>
                            </div>
                        </div>

                        <p className="text-center font-w-hermann w-hermann-semibold-italic page-num">124</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Chapter 8: What Confides in The Land Of Colossus</p>

                        {/* Stanzas */}
                        <div className="mt-3 content-mobile-wrap">
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">“Uhm, let’s just get a cup of the water then bust our way out. I don’t think the sleeping giant that we are currently stepping on would appreciate our presence here.”</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Oh no...</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Will you be the first and only Mustachio to solve this riddle and get The Mirror?</p>
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

                {/* Chapter 8 Characters */}
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={bubblegum} alt="BubbleGum" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">BubbleGum</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">BubbleGum is one heck of a brilliant chemist</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Who loves to experiment chemical reactions that exist</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He thinks that it’s awesome how two things combined can explode</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Or with just one drop, a strong material he can corrode</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">You see BubbleGum thinks he can find the next big thing</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">What it is, well, he says that he is still discovering</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He said wants to create the cure for the worst disease</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Or create potions that will give you eternal bliss</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">One thing that we know is this Mustachios not quitter</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He’ll surely reach his goal and prove that he is a winner</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={loonywise} alt="Loonywise" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Loonywise</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">If you aren’t insane, when you see Loonywise you will be</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He has the powers to make you see things you don’t want to see</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He goes inside your mind and looks for the worst memory</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Flashes it in front of you and you’ll think you’re going crazy</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Loonywise thinks everyone should share the trauma</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">So sometimes he’ll display in your mind someone else’s tragic drama</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">I don’t know why this Mustachio is so obsessed with pain</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He wants to be somewhat in control of everybody’s brain</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Play with their emotions, make them feel terribly lonely</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He wants everyone to know what it feels to lose somebody</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={paddle} alt="Paddle" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Paddle</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Paddle is a Mustachio who loves to dive under the sea</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">There isn’t any other place in he wants to be</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He is a strong-built man full of adrenaline</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">who wouldn’t pass on dare-defying things</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Paddle believes that the waves are his friend</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">That he is in a voyage that never ends</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He owns as ship he calls the Starlight</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">The fastest navigator in the naval flight</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Once he saw the biggest whale but no one believed him</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">But he knows in himself, it was real and not a dream</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={pancakeprince} alt="PanCake Prince" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">PanCake Prince</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">PanCake Prince lives in a Pancake House</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Crowned by parents and a pet mouse</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Although this Mustachio lived in luxury</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He always acted like someone ordinary</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He doesn’t care if you’re extremely poor</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">His kindness and love to you he’ll pour</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Pancake Prince thinks everyone deserves some care</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">That life is already cruel and sometimes unfair</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">So, he started this movement to help those in need</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Any hungry Mustachios and animals, he’ll start to feed</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={paratrooper} alt="Paratrooper" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Paratrooper</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Patarooper said he wanted to be a bird</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Fly high up in the sky and explore the world</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">That dream he couldn’t do because he doesn’t have wings</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He then joined the Mustachio military and fought evil things</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Now that he is older, he said he was extremely happy</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He felt that his dreams are closer to his reality</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He said “there’s nothing like jumping out of a plane”</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">“The fear you overcome, the courage you gain”</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">“Everyone should try how a paratrooper feels”</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">“We think we’re flying and we forget all our bills”</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={pecorider} alt="Peco Rider" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Peco Rider</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">The infamous Peco-Peco creature is a difficult animal to tame</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">But the great Peco Rider calls the it by his pet name</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Peco Rider travels around Mustachioverse to show what he’s accomplished</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">For he’s the only one who mastered the angry, dangerous beast</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">“What makes the animal submit to me is a secret”</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">“Something you’ll be surprised to know, take your bet”</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">However, there’s no specific reason why the Peco-Peco obeys him</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He just took care of it when it got sick and was dying</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He risked his life to save the poor Peco Peco</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">And now it follows him like a shadow</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={penny} alt="Penny" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Penny</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">This Mustachio was named from something he lacks,</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Penny came from a family who just wanted some bucks,</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Now, Penny robs the rich to provide for the poor</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Giving food to Mustachios who sleeps on the floor</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He hates capitalism because he thinks it’s greedy</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">While some people starve, some people have so many</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He thinks the upper class controls the law of the land</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Making things really hard for poor who can’t take a stand</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Penny is someone who equates wealthy as cruelty</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Forgetting the fact, there are also kind people born in nobility</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={peppermintbutler} alt="PepperMint Butler" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">PepperMint Butler</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">PepperMint Butler loves to read books about magic</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Learning about old evil rituals for him is pretty quick</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He wasn’t afraid of monsters or the undead</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">“I can control them”, he said “No need to dread”</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">This Mustachio once summoned a Cerberus</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Everyone except him thinks what he did is dangerous</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He doesn’t understand why people are scared</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">When he kept telling him that he is always prepared</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Now PeperMint Butler works for the LichKing</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Helping him with the chaos to Mustachioverse he’ll bring</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={pilot} alt="Pilot" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Pilot</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">The pilot thinks that walking is very tiring</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He doesn’t like marathons, he also hates running</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">“Why will you choose to walk, when you can choose to fly?”</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">“I’m glad I wasn’t born before airflight because of boredom I will die”</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">The pilot thinks that airplanes are the coolest</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">The way that it glides through the clouds is the best</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">“The places you can go with airplanes are endless</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">So many breathtaking views you get to witness”</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">The pilot believes that airflight is a marvelous gift</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">A thing that he anyone should cherish, a profession he loves to keep</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={pumpkinman} alt="Pumpkin Man" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Pumpkin Man</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">This Mustachio will always give you treats</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Then he’ll make a bet and use all his cheats</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">The Pumpkin Man is one heck of a tricky Mustachio</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">When you start complaining, he’ll try to beat you</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">So just because he has a Pumpkin in his face</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Doesn’t mean that he is kind and full of grace</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">So, if you play with him, just accept your defeat</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Unless you’re strong enough to make him retreat</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">The Pumpkin Man should probably have someone teach him a lesson</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">So that he’ll know that he can’t always be the champion</p>
                            </div>
                        </div>
                    </div>
                </article>

                {/* Chapter 9 */}
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <div className="w-1/3 mx-auto mt-5 mb-5">
                            <img className="w-100" src={sagesRant} alt="Chapter 9" />
                        </div>
                        <p className="text-center text-xl font-w-hermann w-hermann-reg mb-2">CHAPTER 9</p>
                        <h3 className="text-center font-w-hermann w-hermann-semibold">The Sky's Contempt at Fellowcro</h3>
                        <p className="text-center text-xl font-w-hermann w-hermann-semibold-italic ch-footer mb-5">The Sages Rant</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Chapter 9: The Sky's Contempt at Fellowcro</p>
                        <div className="w-1/4 mx-auto mt-3 mb-4 ">
                            <img className="w-100" src={chapter9Logo} alt="Chapter 9" />
                        </div>

                        {/* Stanzas */}
                        <div className="mb-3 content-mobile-inner">
                            <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">
                                <span className="text-5xl">T</span>he Mustachios never thought they’d be back at the mouth of Fellowcro Forest again, but alas, here they are met with vicious snarls and creepy vines ready to make them stay eternally inside the forest again.
                            </p>
                        </div>
                        <div className="mb-3 content-mobile-inner">
                            <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">With not much of a choice, they start trekking through the forest’s eternal night full of screams of misery with one thing in mind: To get to Bristle Batons Hot Spring.</p>
                        </div>                   
                        <div className="mb-3 content-mobile-inner">
                            <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">After a couple more hours of just navigating through Fellowcro Forest, it suddenly became eerily silent. No snarls and growls from the creatures of the night, no chirping from the deadly birds, no shrill screams from the vines, nothing. It was statically silent.</p>
                        </div>          
                        <div className="mb-3 content-mobile-inner">
                            <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Like the calm before another storm.</p>
                        </div>          
                        <div className="mb-3 content-mobile-inner">
                            <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">But, this wasn’t described in the book. Every Mustachio knows that Fellowcro Forest can never be silent, and most definitely never calm.</p>
                        </div>          

                        <p className="text-center font-w-hermann w-hermann-semibold-italic page-num">137</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Chapter 9: The Sky's Contempt at Fellowcro</p>

                        {/* Stanzas */}
                        <div className="mt-3 content-mobile-wrap">
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">To prepare for whatever was coming, they went to a cave to plan.</p>
                            </div> 
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">As the last of the Mustachios entered the cave, it was suddenly blocked by a boulder! Who or what put that there?</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">“Hey! There’s an opening here! It was said that the Bristle Batons Hot Spring is at the end of a cave right?”</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">After the long arduous trek through the series of caves, they finally made it to a clearing.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">What a wonderful sight!</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">The Towel of Healing is just right in front of them!</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Forever warming the body and relieves exhaustion of the beholder.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">“Well, the Towel of Healing is just an arm snatch away, why don’t we enjoy ourselves first in this Hot Spring? After all that we went through, this is just well deserved,” Skeleton Prince nonchalantly said while taking in all the steam from the Hot Spring.</p>
                            </div>
                        </div>

                        <p className="text-center font-w-hermann w-hermann-semibold-italic page-num">138</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Chapter 9: The Sky's Contempt at Fellowcro</p>

                        {/* Stanzas */}
                        <div className="mt-3 content-mobile-wrap">
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">“No, you brat. As much as I’d like to support your idea of relaxation, this is Fellowcro Forest we’re talking about. Nothing is safe here,” butted Raggedy Prince, ruining Skeleton Prince’s relaxation fantasies. Then, they started arguing. Raggedy Prince may be a sunshine but he can be a bummer sometimes. Did he see bad memories just now?</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Such peculiar royals they are.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Luckily, Simone went in between, “Rather than engaging in pointless quarrels, you two should just appreciate each other. You never know what you can lose because of your foolishness.” That sounded deep coming from Simone, filled with so much regret for his past mistakes.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">“Right! But you should still fight for what is right! One mistake, one death is already too many!” seconded Laya, not afraid of speaking her mind.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">“All this talking is pointless! The Towel of Healing is floating above the steaming water, we have no other choice but to go through it,” Well, Dako is just relieved that it’s still silent and that there weren't any sounds of bombing, something he really despises.</p>
                            </div>
                        </div>

                        <p className="text-center font-w-hermann w-hermann-semibold-italic page-num">139</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Chapter 9: The Sky's Contempt at Fellowcro</p>

                        {/* Stanzas */}
                        <div className="mt-3 content-mobile-wrap">
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">He’d rather go through the scalding hot water and scare people since he’s no longer limited to just a television in one place. Look, he just carries his own!</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">“I’ll just stay here. Y'all know I can’t get myself wet,” Shoko said while waving his somewhat cyborg arm.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">No one but Scare Crow paid attention to him with his small “Me too.” As much as Scare Crow is adorable, it’s kinda annoying how not a single thing about him is scary when he should be the one scaring others. Such a scaredy cat, “How about you, Skate Zone? Would you stay with us too?”</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Skate Zone just replied, “Whatever,” and immediately went through the steaming water with not a single care in his bones. He must be the most indifferent Mustachio everyone has met.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">“Wait! Sign Maker has something to show!”</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">“Too late,” said Slendie, the master of every new Mustachio technology.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Sign Maker held up a sign that said… ”DANGER ⚡”</p>
                            </div>
                        </div>

                        <p className="text-center font-w-hermann w-hermann-semibold-italic page-num">140</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Chapter 9: The Sky's Contempt at Fellowcro</p>

                        {/* Stanzas */}
                        <div className="mt-3 content-mobile-wrap">
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">All hell is about to let loose now that Sign Maker has done his job and that is to either act like a seer or become the one to decide your future. He’s apparently in his seer mode.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Thunderous cracks of lighting now surround the Towel of Healing. If the vines were the one hindering them from getting the Cutlass in their past adventures, now it’s high voltage lightning protecting the Towel of Healing!</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">“Let’s just go for it. We can just heal ourselves after.”</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">“Idiot! It can’t heal fatal wounds or sickness!”</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">“Then what is it for?”</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">A riddle from the same sky appeared saying:</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-italic mb-0">Not for a miracle, not as a gem</p>
                                <p className="content-mobile text-center font-w-hermann w-hermann-italic mb-0">A scruffy pirate’s most priced item</p>
                                <p className="content-mobile text-center font-w-hermann w-hermann-italic mb-0">Anger the skies and face your sentence</p>
                                <p className="content-mobile text-center font-w-hermann w-hermann-italic mb-0">Madness of the heavens as an endless sequence</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Did they do something to upset the sky?</p>
                            </div>
                        </div>

                        <p className="text-center font-w-hermann w-hermann-semibold-italic page-num">141</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Chapter 9: The Sky's Contempt at Fellowcro</p>

                        {/* Stanzas */}
                        <div className="mt-3 content-mobile-wrap">
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Will you be the first and only Mustachio to solve this riddle and get The Towel of Healing?</p>
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

                {/* Chapter 9 Characters */}
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={dako} alt="Dako" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Dako</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He’s the subject to every movie lovers’ nightmare</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He is no longer something you can just ignore</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Well, he can now haunt people without television</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Look, he can now just carry his own</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Folding paper cranes remain as his hobby</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">As he’s still denied the chance for recovery</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He despises hearing sounds of bombing</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Says it is the culprit for all of his suffering</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">But he remains steadfast in his movie called life</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">How funny for he doesn’t feel like he’s alive</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={laya} alt="Laya" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Laya</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">How funny for he doesn’t feel like he’s alive</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Laya has always been that simple</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">“Oust DU30! One is already too many!”</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Sincerely, from the ones who’s had enough already</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">The wounds suffered by her ancestors</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">She fights to avoid a gruesome future for her successors</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Laya is not afraid to speak her mind</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">For she fights for the greatness of all humankind</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">A megaphone and a placard in hand</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Her voice is still the best weapon for others to understand</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={raggedyprince} alt="Raggedy Prince" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Raggedy Prince</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Patches of memories he holds</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">All the classic memoir he upholds</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Raggedy Prince is your go-to</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">For memories nobody else has an access to</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He’s not much older than a couple of years</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">But he’s seen old memories enough to bring him close to tears</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He is a prince by birthright but nobody pays attention to him</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Born out of wedlock, considered a shame on a whim</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He’s still a child inside, he’s just a nice burst of serotonin</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">As if he’s never been wronged by the world he was born in</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={scarecrow} alt="Scare Crow" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Scare Crow</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Contrary to popular opinion, this Mustachio is an epitome of utter disparity</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Things he should scare just laughs, “What a pity. Not a single thing about him is scary,”</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He get easily frightened, has a bit of a faint heart</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">A rare sight for Mustachios normally always up for a fight</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Scare Crow is his name</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">The bad nature in him no one can never inflame</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He is an easy target for the pranksters</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Could never hold a grudge even to bad screenwriters</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Honestly, he is just nothing like a ghoul</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Even has innocence that could burn the twisted soul</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={shoko} alt="Shoko" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Shoko</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Things most important in life are those simple possessions</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">But becoming powerful is one of Shoko’s ulterior obsessions</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He is such a fellow to be wary of</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Rose from great bandits he was made of</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">In search of a perfect mentor</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He comes across as a fierce oppressor</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">His potential is limitless</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Shoko is a mystery, always expressionless</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">A powerful cyborg he can be when unleashed</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Albeit his power has never been pre-established</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={signmaker} alt="Sign Maker" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Sign Maker</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">If you're waiting for a sign, this is it</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">All the signs you’re waiting for, call on Sign Maker to make it explicit</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Such a fun dude to be around</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Even his eyes smiles like he’s never been to a battleground</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He’s an artist for true predictions</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Like a seer but with his hands as representations</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">What he comes up with on placards are masterpieces</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Most of those are what people despises</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He’s both loved and abhorred</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">For what shows on the signs are mostly uncensored</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={simone} alt="Simone" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Simone</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">His consciousness long gone because of an unprecedented power</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Now for some reason, he has gained a bit of it as if like a  wallflower</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">On his hand is the cursed crown</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">A memory of a foolishness he was drowned</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Taking it was his biggest regret</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He was hoping it was all just a bet</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He’s now filled with grief for all the things he has lost</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Over a power he didn’t even want, he’d rather just be a ghost</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Navigating through the world once again as Simone</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He’s being hit by all the meanings of being alone</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={skatezone} alt="SkateZone" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">SkateZone</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Skate Zone is a Mustachio that is always disinterested</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Boards and beers are the only things he has been invested</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He couldn’t give two cents to anything even if he wanted to</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">That’s just he is, he doesn’t even care even if there’s a mosquito</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Being reckless is just his nature</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Just does anything for the sake of adventure</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">No one really knows his real motives</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Even when drunk, his true feelings he never gives</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">His background unknown</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He may pose a threat if his colors gets shown</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={skeletonprince} alt="Skeleton Prince" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Skeleton Prince</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Obviously, Skeleton Prince needs more calcium</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Get more milk for him as his medium</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">A spoiled brat always whining</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Does he even care if he is losing?</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">It’s like he’s just in it for the clout</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">His reasons always filled with doubt</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He’s used to getting all that he wants</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">So annoying when he starts his rants</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Honestly, why is he like that?</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Aside from his title, what more reasons for Skeleton Prince to be given a pat?</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={slendie} alt="Slendie" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Slendie</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Slendie is one tough and cool Mustachio</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Who has been through a lot, this I tell you</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He lost the love of his life unexpectedly</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">This made his life somewhat cold and lonely</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">But after a few months of soul-searching and reflection</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He found his purpose again and direction</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He started making apps that help other people</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Making complicated things understandable and simple</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Now Slendie is the master of every new Mustachio technology</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">You can’t beat him in that area, he’s several levels above ordinary</p>
                            </div>
                        </div>
                    </div>
                </article>

                {/* Chapter 10 */}
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <div className="w-1/3 mx-auto mt-5 mb-5">
                            <img className="w-100" src={sagesRant} alt="Chapter 10" />
                        </div>
                        <p className="text-center text-xl font-w-hermann w-hermann-reg mb-2">CHAPTER 10</p>
                        <h3 className="text-center font-w-hermann w-hermann-semibold">Trapped in the Void of Time</h3>
                        <p className="text-center text-xl font-w-hermann w-hermann-semibold-italic ch-footer mb-5">The Sages Rant</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Chapter 10: Trapped in the Void of Time</p>
                        <div className="w-1/4 mx-auto mt-3 mb-4 ">
                            <img className="w-100" src={chapter10Logo} alt="Chapter 10" />
                        </div>

                        {/* Stanzas */}
                        <div className="mb-3 content-mobile-inner">
                            <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">
                                <span className="text-5xl">A</span>ccording to the old journal, the last artifact will be found on the most isolated and oldest surviving lighthouse in the vicious Southern Seas, the Crustache Lighthouse. It is said to be reached only through air travel because relentless waves are hitting it in all directions. The waves are apparently higher than the tower itself! 
                            </p>
                        </div>
                        <div className="mb-3 content-mobile-inner">
                            <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Unfortunately, those who have the power to teleport cannot go there if they’ve never been there and none of these travelling Mustachios has taken the challenge to go there too. Hell, even the keepers of the Crustache Lighthouse rarely go there anymore.</p>
                        </div>
                        <div className="mb-3 content-mobile-inner">
                            <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">The Mustachios went there of their own accord. Some had to wake up their demons so that they could fly there, some went on a helicopter, and some just did their own thing just to get there.</p>
                        </div>

                        <p className="text-center font-w-hermann w-hermann-semibold-italic page-num">154</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Chapter 10: Trapped in the Void of Time</p>

                        {/* Stanzas */}
                        <div className="mt-3 content-mobile-wrap">
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Crustache Lighthouse was looking rusty and malleable, obviously not the safest place to be in. It’s quite a mystery how this has survived the resentful looking waves.</p>
                            </div> 
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">But contrary to the exterior, the interior was magnificent!</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Just like the Lady Tickler Castle, it’s like it’s never been touched, never encompassed by time and space. Everything is just crisp and clean.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Well of course, what could we expect from the lighthouse that holds the Seat of Time? </p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">With the Seat of Time, one can see the past or future depending on the spin.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Clockwise = future. Counter Clockwise = past.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">How far one can go in time depends on the speed of spin. One must be careful though because they can be thrown off the spinning chair and get stuck in the time zone. Not too long if it’s just a minute ago.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">This might be the only artifact explicitly described in the old journal by the Prospector.</p>
                            </div>
                        </div>

                        <p className="text-center font-w-hermann w-hermann-semibold-italic page-num">155</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Chapter 10: Trapped in the Void of Time</p>

                        {/* Stanzas */}
                        <div className="mt-3 content-mobile-wrap">
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">The most obvious place the Seat of Time could be located is in the Control Room of the lighthouse so they didn’t waste much time dwelling on it.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">What a surprise! The Control Room isn’t just a Control Room after all, it’s a whole floor with a 360 view of the sea, and centered is the Seat of Time. </p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Wary of any traps, the Mustachios almost tiptoed while looking around the inconspicuous Control Room.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">“The Seat of Time isn’t as grand as was described in the journal,” said Stan March, such a keen observer, but not a perfect one.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">“Is there something wrong with it? Can StopOver check it out?” asked Violinist since he has high respect towards StopOver. Both of them being such achievers in life, him being skilled in Violin, and StopOver being skilled in fixing anything, except for his heart.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">“Seems like nothing’s wrong with it,” replied StopOver.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">“Yeah, nothing seems wrong with it, but something with this place is wrong. There are a lot of broken souls here,” said Spirit Dream, the caretaker of broken souls.</p>
                            </div>
                        </div>

                        <p className="text-center font-w-hermann w-hermann-semibold-italic page-num">156</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Chapter 10: Trapped in the Void of Time</p>

                        {/* Stanzas */}
                        <div className="mt-3 content-mobile-wrap">
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">“A lot? I thought this place is rarely visited even with it being so old? Was there a lot of corruption here too?” asked Towns People, with great courage and conviction to change the vile world he lives in.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">“Well, at least the view here is splendid,” said Sludgie, a Mustachio of many talents and a cheerful one to be with.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Wait… Did he say splendid? Since when did being slammed with gigantic waves become a splendid view?</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Suddenly, becoming alert, they all looked out the windows. The once raging seas became so calm, and the sky became so blue after being so gloomy.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Only now did they notice that Swamp Monster was innocently sitting on the Seat of Time! Oh no! Swamp Monster may not cause any harm intentionally despite being a hideous monster, but he isn’t exactly the sharpest tool in the box! He didn’t seem to spin in any direction either, so what time zone are they in? There might really be something wrong with the Seat of Time as opposed to what StopOver said.</p>
                            </div>
                        </div>

                        <p className="text-center font-w-hermann w-hermann-semibold-italic page-num">157</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Chapter 10: Trapped in the Void of Time</p>

                        {/* Stanzas */}
                        <div className="mt-3 content-mobile-wrap">
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">“I may eat brains but I definitely don’t have the brightest one. Let me just ask all of you... How long have we been here?” asked Tsuku, the zombie Asian Mustachio.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">“Idiots! How did we miss the fact that everything here is affected by the Seat of Time?!”</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">“I noticed,” said Space Man in a somewhat delirious state.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">The others gasped. “Of course! You’re such a space junky. You wanted this all along!”</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">“I enjoy the serenity of this vast space, a never-ending void. While we’re here, we should establish connections to other species. Let’s learn about their culture, hear their crazy stories…” and Space Man continued rambling on with his fantasies with Space Pirate, another space junky. The latter was just actually curious of the treasures they can find here so that he could steal it. The others couldn’t do anything but to just roll their eyes and whisper amongst themselves in panic.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Picking up a piece of paper at the foot of the Seat of Time, Swamp Monster read,</p>
                            </div>
                        </div>

                        <p className="text-center font-w-hermann w-hermann-semibold-italic page-num">158</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Chapter 10: Trapped in the Void of Time</p>

                        {/* Stanzas */}
                        <div className="mt-3 content-mobile-wrap">
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-italic mb-0">“Nothing alike, unretractable</p>
                                <p className="content-mobile text-center font-w-hermann w-hermann-italic mb-0">An investment non-renewable</p>
                                <p className="content-mobile text-center font-w-hermann w-hermann-italic mb-0">Unreal but true, just like in a mime</p>
                                <p className="content-mobile text-center font-w-hermann w-hermann-italic mb-0">Forming in an instant but lasts a lifetime”</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Countless questions dance around the minds of the Mustachios after Swamp Monster uttered those words. </p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">They should be the one in possession of the Seat of Time, not the other way around! Now, how will they get out of this void and finally take possession of the Seat of Time?</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Will you be the first and only Mustachio to solve this riddle and get The Seat of Time from the Crustache Lighthouse?</p>
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

                {/* Chapter 10 Characters */}
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={sludgie} alt="Sludgie" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Sludgie</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Sludgie is a Mustachio who will surprise you</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He’s a man of many talents, a person of great value</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He is skilled in arts, languages, sports and music</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He also knows a bit of good old dangerous magic</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">If you want someone as a cheerful company</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Choose Sludgie, he’ll make your day happy</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He is friends to many and everyone loves him</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He has colorful life like a pretty musical film</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">If you’re Asian, you’re his favorite person that’s present</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Especially if you’re someone who is of Chinese descent</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={spaceman} alt="Space Man" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Space Man</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Space Man aims to find space mysteries</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Finding mental peace when he travels between galaxies</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He is one chill and clever Mustachio guy</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">The coolest spacecraft he wants to buy</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He said there’s serenity in the vastness of space</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">A never-ending darkness kind of place</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">One day he’ll find every planet hidden in the universe</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Every nook and cranny he will gladly traverse</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Space Man said “We should establish connection to other species”</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">“Let’s learn about their culture, hear their crazy stories”</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={spacepirate} alt="Space Pirate" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Space Pirate</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">One Mustachio loves space treasures</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He’ll take each pricey item gladly like a vulture</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Space Pirate is the name of this man</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">With a tranquilizer-filled high-tech gun</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He will make you sleep and rob you of your items</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Don’t worry though, he doesn’t hurt his victims</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He’s just fascinated with everything that’s worth so much</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Because when he was a child, he doesn’t anything as such</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He said he’s keeping up to balance his life</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Aiming to be rich, powerful, and get a lovely wife</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={spiritdream} alt="Spirit Dream" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Spirit Dream</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">The Spirit dream lives in the spirit realm</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">A hazy place filled with souls that gleam</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Spirit Dream is the caretaker of broken souls</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Showing them their happy memories and achieved goals</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">This Mustachio is an empathetic and thoughtful one</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Who also comforts the loved ones of those who were gone</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">She said “Everyone dead and living deserves some care</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">So each soul that enters the realm receives a fanfare”</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">“And each grieving household receives an invisible caretaker”</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">“Their successful healing and recovery also matter”</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={stanmarch} alt="Stan March" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Stan March</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Stan March is a Mustachio that’s a critical thinker</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Who knows all languages there is a master</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">But the downside is her mind is vindictive to herself</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Keeping record of her mistakes like books on a shelf</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Her attention to detail makes her very useful</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">And this allowed her to be very successful</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">But no one knows this girl is suffering so much</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">For everyone doesn’t see the real her, her soul they can’t touch</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">She said “It’s hard being admired and respected”</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">“When your heart feels torn and their view of you is distorted”</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={stopover} alt="Stop Over" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Stop Over</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">If you need a technician who can fix things for you</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Call StopOver, he knows exactly what to do</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">StopOver has been tinkering with things since he was young</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">That’s when desire to master machines in his mind has sprung</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">But no one knows that this skilled person isn’t okay</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">So many painful memories he can’t say</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">“If you can make something out of just any parts”</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">“Why can’t I master my own raging heart”</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Maybe because he’s made of flesh and bones</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">And unlike machines, he’s always searching for a home</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={swampmonster} alt="Swamp Monster" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Swamp Monster</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Swamp Monster is large gross humanoid accompanied with putrid odor</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He is green and slimy, a disgusting Mustachio monster</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He has Merman ears and scales as rough as granite</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Many people are terrified but Swamp Monster doesn’t bite</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">In fact, he is someone who only eats fruits and vegetables</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">For him meat of any kind tastes really horrible</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">So if you find this Mustachio in the swamp don’t be scared</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Cause he won’t hurt you, you’ll be spared</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">But best if you give him any simple offering</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Especially if it’s peaches, he’ll think it’s a blessing</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={theviolinist} alt="The Violinist" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">The Violinist</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Violinist loves to busk on the streets everyday till noon.</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He doesn’t care if you think that he plays out of tune</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He said “Practice makes perfect so practice I will do”</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">“Why would I be ashamed when it’s my passion I share to you”</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">So Violinist kept playing even during late at night</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">To perform his song on stages where lights shine so bright</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">After 10 years he is the best violin player in the city</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Performing on places that are pretty and fancy</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">“This is what you achieve when you have commitment”</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">“You’ll be proud someday that your dream is now an achievement”</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={townspeople} alt="Towns People" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Towns People</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Towns people live in a poor village where crime rate is high</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">A place where there’s daily warnings to be careful or else you’ll die</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He’s a Mustachio who wants to end corruption in his town</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">But when he tells these things to others, they shut his ideas down</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">They think what Towns People want is impossible</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Someone can’t easily remove every crime in a place so horrible</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">But Towns People is a man of courage and conviction</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He doesn’t care how grave is his village’s condition</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">One day he’ll clean the area of vile and evil Mustachios</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He said he’ll become a Towns People to Town Hero with gusto</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={tsuku} alt="Tsuku" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Tsuku</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Tzuku is a Mustachio who is an Asian zombie</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Who loves brains, but ramen makes him more happy</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He creates these Asian meals from human flesh</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Because the Asian part of him do not want to rest</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">His main targets are doctors, engineers, and lawyers</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Someone whose profession was always pushed to him by his father</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Tsuku will bite you if you make fun of his accent</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">So don’t joke about it, you better be silent</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">One person offered him a cure for his zombie situation</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">But he neglected it, saying he enjoys being a scary distraction</p>
                            </div>
                        </div>
                    </div>
                </article>

                {/* Epilogue */}
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <div className="w-1/3 mx-auto mt-5 mb-5">
                            <img className="w-100" src={sagesRant} alt="Epilogue" />
                        </div>
                        <p className="text-center text-xl font-w-hermann w-hermann-reg mb-2">Epilogue</p>
                        <h3 className="text-center font-w-hermann w-hermann-semibold">Memories</h3>
                        <p className="text-center text-xl font-w-hermann w-hermann-semibold-italic ch-footer mb-5">The Sages Rant</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Epilogue: Memories</p>
                        <div className="w-1/4 mx-auto mt-3 mb-4 ">
                            <img className="w-100" src={epilogueLogo} alt="Epilogue" />
                        </div>

                        {/* Stanzas */}
                        <div className="mb-3 content-mobile-inner">
                            <p className="text-center font-w-hermann w-hermann-italic mb-0">
                                <span className="text-5xl">"N</span>othing alike, unretractable
                            </p>
                            <p className="text-center font-w-hermann w-hermann-italic mb-0">An investment non-renewable</p>
                            <p className="text-center font-w-hermann w-hermann-italic mb-0">Unreal but true, just like in a mime</p>
                            <p className="text-center font-w-hermann w-hermann-italic mb-0">Forming in an instant but lasts a lifetime”</p>
                        </div>
                        <div className="mb-3 content-mobile-inner">
                            <p className="text-center font-w-hermann w-hermann-semibold mb-0">Being handed this riddle in the midst of being possessed by the Seat of Time just doesn’t bode well with the Mustachios.</p>
                        </div>
                        <div className="mb-3 content-mobile-inner">
                            <p className="text-center font-w-hermann w-hermann-semibold mb-0">Its answer seems to be so doubtfully easy: <i>Memories.</i></p>
                        </div>
                        <div className="mb-3 content-mobile-inner">
                            <p className="text-center font-w-hermann w-hermann-semibold mb-0">What do memories have to do with their escape?</p>
                        </div>
                        <div className="mb-3 content-mobile-inner">
                            <p className="text-center font-w-hermann w-hermann-semibold mb-0">Will it lead them to another artifact?</p>
                        </div>

                        <p className="text-center font-w-hermann w-hermann-semibold-italic page-num">171</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Epilogue: Memories</p>

                        {/* Stanzas */}
                        <div className="mt-3 content-mobile-wrap">
                            <div className="mb-3 content-mobile-inner">
                                <p className="text-center font-w-hermann w-hermann-semibold mb-0">Whilst discussing this, Swamp Monster went out of the control room unnoticed. What trouble could he possibly be up to now?</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="text-center font-w-hermann w-hermann-semibold mb-0">Lurking in the dark stairs of Crustache Lighthouse, Swamp Monster stumbled upon a mysterious room full of books. Now…why would someone keep a library in a lighthouse where the books could be wet anytime it decides to fall prey to the relentless waves?</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="text-center font-w-hermann w-hermann-semibold mb-0">Scared to ruin the sacred looking books, he went back in the control room still unnoticed while the other Mustachios were racking their brains for a possible escape.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="text-center font-w-hermann w-hermann-semibold mb-0">You’d usually see Swamp Monster with his eyes innocently unfocused, but now, he seems to be in deep thought. Unable to convey his thoughts properly, he approached an unsurprised Stan March. Didn’t seem like his adventure was unnoticed at all, Stan March is such a keen observer indeed.</p>
                            </div>
                        </div>

                        <p className="text-center font-w-hermann w-hermann-semibold-italic page-num">172</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Epilogue: Memories</p>

                        {/* Stanzas */}
                        <div className="mt-3 content-mobile-wrap">
                            <div className="mb-3 content-mobile-inner">
                                <p className="text-center font-w-hermann w-hermann-semibold mb-0">Without saying a word and without minding his slimy touch, Stan March let Swamp Monster lead her through whatever place Swamp Monster deemed important.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="text-center font-w-hermann w-hermann-semibold mb-0">The library looked massive! Certainly not belonging to a place such as the Crustache Lighthouse. </p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="text-center font-w-hermann w-hermann-semibold mb-0">Swamp Monster was smart to bring another Mustachio to check out these sacred looking books or else, he might ruin the books by touching them.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="text-center font-w-hermann w-hermann-semibold mb-0">As Stan March started exploring the book, a secret door slammed open!</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="text-center font-w-hermann w-hermann-semibold mb-0">Hesitant to walk through the door, they only caught a glimpse of what seemed like a whole new world.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="text-center font-w-hermann w-hermann-semibold mb-0">The other Mustachios then flocked to the secret library upon noticing the disappearance of the two.</p>
                            </div>
                        </div>

                        <p className="text-center font-w-hermann w-hermann-semibold-italic page-num">173</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Epilogue: Memories</p>

                        {/* Stanzas */}
                        <div className="mt-3 content-mobile-wrap">
                            <div className="mb-3 content-mobile-inner">
                                <p className="text-center font-w-hermann w-hermann-semibold mb-0">“Is this the Prospector’s place? OR NOT?”</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="text-center font-w-hermann w-hermann-semibold mb-0">They whisper amongst themselves as they stare out into the vast space of what could be their next adventure.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="text-center font-w-hermann w-hermann-semibold mb-0">A place for new memories. </p>
                            </div>
                        </div>

                        <div className="mb-5 ch-footer mustachio-logo-mobile-wrap">
                            <div className="w-1/6 mx-auto mustachio-logo-mobile">
                                <img className="w-100" src={mustachioLogoFooter} alt="Mustachio Logo" />
                            </div>
                        </div>
                    </div>
                </article>

                {/* Up Next */}
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <h3 className="mb-4 text-center font-w-hermann w-hermann-semibold">- THE END -</h3>
                        {/* <p className="text-center text-lg font-w-hermann w-hermann-reg mb-3">Release Date: November 18, 2021 - 7PM SGT</p> */}
                        
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

export default MobileDesign