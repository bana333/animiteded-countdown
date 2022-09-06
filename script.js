const nums = document.querySelectorAll('.nums span')
const counter = document.querySelector('.counter')
const finalMessage = document.querySelector('.final')
const replay = document.querySelector('.#replay')


runAnimation()

function resetDOM() {
    counter.classList.remove('hide')
    finalMessage.classList.remove('show')


    nums.forEach((num) => {
            num.classList.value = ''
        }) +

        nums[0]
    classList.add('in')

}

function runAnimation() {
    nums.foreach((num, idx) => {
        const nextToLast = nums.length - 1

        num.addEventlistener('animationend', (e) => {
            if (e.animationName === 'goIn' && idx != nextToLast) {
                num.classList.remove('in')
                num.classList.add('out')
            } else if (e.animationName === 'goIn' && num.nextelementsibling) {
                num.nextelementsibling.classlist.add('hide')
            } else {
                counter.classList.add('hide')
                finalMessage.classList.add('show')

            }
        })
    })
}
replay.addEventListener('click', () => {
    resetDOM()
    runanimation()

})



//DOM stands for documentobject model. it is a programming interface allows to craete, change or remove elements