document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");
    const button2 = document.getElementById("boton2");

    button2.addEventListener('click', e => {
        console.log('click');
        const contenido2 = document.getElementById("contenido2");
        contenido2.innerHTML = `
        <h4>Symptoms of pneumonia</h4>
        Common symptoms of pneumonia include:
        <u3>
            <li>A cough: which may be dry, or produce thick yellow, green, brown or blood-stained mucus.</li>
            <li>Difficulty breathing</li>
            <li>Rapid deartbeat</li>
            <li>High temperature</li>
            <li>Feeling generally unwell</li>
            <li>Sweating and shivering</li>
            <li>Chest pain</li>
            Contact with your primary health center if you experienced any of these symptoms.
        </u3>
        <h4>Risk groups</h4>
        <u4>
            <li>Babies and very young children</li>
            <li>Elderly people</li>
            <li>People who smoke</li>
            <li>People with other health conditions, such as ashtma, cystic fibrosis, or heart
            ,kidney or liver condition</li>
            <li>People with a weakened immune system</li>
        </u4>
        <h4>Treatment</h4>
        Mild pneumonia can usually be treated at home by:
            <li>Getting plenty of rest</li>
            <li>Taking antiobitcs</li>
            <li>Drinking plenty of fluids</li>
        For at-risk groups, pneumonia can be severe and may need to be treated in hospital. 
        This is because it can lead to serious complications, which in some cases can be fatal. 
        <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUREhIWFhUVGBgYFxcYFxcXGBcaGRoXFxcXFRUYHSggGBomHhoaITEiJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGxAQGy0lICUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOMA3gMBEQACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAgMEBQYBBwj/xABEEAACAQIDBQUDCQUHBAMAAAABAgMAEQQSIQUxQVFhBhMicYEykaEHFCNCYnKxwdEzUoKS4TRDVHOisvAXo9LxU1XC/8QAGwEBAAIDAQEAAAAAAAAAAAAAAAECAwQFBgf/xAA0EQACAgEDAgUDAwIGAwEAAAAAAQIRAwQhMRJBBSJRYXETMpFCgbGh0RQjMzRS8GLB4RX/2gAMAwEAAhEDEQA/ANpXzs9MFAFAFAFAFAFAFAFAFAFAFAFAFAFAFCAoSFAFAFAFKb4IYycVGNDIn8w/Wsiw5H+l/gjrj6jiMDqCCOmtUlFx5RKafAqoJCgCgCgCgCgCgCgCgCgCgCgCgCgCgCgCgCgOUBiO1vbNo2aDC2zL7cm8KeSjcT1PHSu94f4Wpx+pl/H9zQ1Gq6X0wMBisfLKbySu5+0xPuHCu7DDjgqil+DQlOUnuxzBbWnh/ZzSL0DG38p0PuquTTYsn3RRMcko8MvsJ2/xaaN3cn3lsfehA+FaOTwfTy4tGeOsyLncnf8AUmT/AA6fzt+lYP8A8THf3sv/AI6XoQcZ2/xbiyd3H1Vbn3sSPhWfH4Pgg7lbKS1mR8Gexm0JpTeWV3+8xI9BuFdDHgx49oRS/Y15TlLlkTKOVZSo7BMyHMjMh5qSp94qsoRkqkrJTa4NTsXt3PEQs30yczYSDyb63r765ep8JxZN8flf9DaxaucXUt0ekbM2lHiIxJE2ZT7weTDga83n0+TDLpnszowyKauLJdYTIFAFAFAFAFAFAFAFAFAFAFAFAFAFAFKBW9oscYMNLKN6qcv3jovxIrZ0eJZc8Yv9/gxZp9MGzyj5ppBEd8xzueNuA91z5171QSUYo891W3JkDEJpmAtd3HkBlsPjWOS7mSPoR6qWCgCgCgCgCgCgCgLfszttsJMHFyhsJF5rz+8N4/rWprNJHUY6fK4MuHK8cvY9mikDKGU3DAEEcQdQa8XKLi3F9jtJpq0LqCQoAoAoAoAoAoAoAoAoAoRYUJCgFwQl2CLvJt/WsuHFLLkUI8sx5JqEXJl5tnZgEalB+zFj1HE+/X1Nd/xLw+McEXjX2rf3RzdLqW8jUu/8mC7cQl8DMBwAb0Vgx+ArleGSUdTFv4N7VK8TPM8XiTkw8y70GU9CtiL+Yr28pfbJHBjHdpkHEzA5gvss2cDipO8f85Csbl6GSMfUj1UsFAFAFAFAFAFAFAFAeq/JxtDvML3ZOsLZf4T4l/MeleU8Yw9GfqX6v5OrpJ9UKfY1dco2woAoAoAoAoAoAoAoAoDRbNwKS4dQw/eseI8R3GvUaHSYs+kipr1+Tj580seduJWbQ2U8WvtLzHDzHCuTrPDMun3W8fX+5u4NXHJs9mV9c02zQ9nMHYGU7zovlxPrXpvBdJ0x+tLl8fByddmt9C7F2y30NdxpNUznpmM2vgQjNGRdWBtfip0sfwrxet08tLndcco7unyrLj354Z432j7MTYVm7tWeFjoVBa3IOBuI3X416PReIRzwpvzd/wD4c/Pp3jlfKLbZHybTyKrzHu82pXTMq9b7mPLhx5VmnqUnSEMDe8jQ/wDTyPcbhB9VCAzdZJDdmPQWA+NYv8QzOsMCs2l8n37uWJR+6ryMfNi+vkAKtHUEPTp8GT2p2YniuUjldRvbuwPgGY+8Cs8csXya88Mo8FHWUxBQBQBQBQBQG0+S7E2xEsfB47+qMPyY1xfG8d4lL0f8m5opVJo9MrzJ1AoAoAoAoAoAoAoAoAoDW7C/YJ6/7jXs/C/9rA4Or/1pE8iug1ZrlTjdho5DL4ddQNxHG3I1yNT4RiyS6o7b7m5i1s4R6Xv6FqiAAACwGgrrRiopRRqN27YqrEEDamzxMoF7EHQ/jWhrtFHVQrhruZ8Gd4pWVG2sMkSRRJvmkUM3EqgMrehyZf4qrDSYtLjfQt/XuZFlnmmuo7WqboUAGgKfHIA5HDf+tWRli7R8/jpXVOQwoAoAoAoAoDRdgJMuOi+0HX/QT+IFc7xSN6aXtTNjSv8AzEevV5A7BygO0AUAUAUAUBLg2bI6h1W4PUfgTW7j8Oz5YKcFa+TWlqscJdMnRxtmzD+7b01/CkvDtTHmDJWqxP8AUMthnG9GHmp/SsEtPljzB/gyLLB8SX5NXsYfQp5fma9h4bFrTQTXY4mpd5WL2qZRDJ83CGbK3dh7hM9vDmtra9bpgKDsR2tGMVoZl7rGQeGeE6G40zoDvU6c7XG8EEkS0ampICgC1AZrbzXxcK8EhlY+bNEq/ANWpq35Uja0q8zO1zzeCgCgK7aWDLXO8EWI47raWqydF4tNUzyjbXYOWMlsOe8TgpIDjpro3wPSt2GoT5NTJppLeO5lcThJIzaSN0PJlK+6++s6knwzWcXHlDNSQOJAzAsqsQN5AJA8yN1RaCTfA3UkBQkvuwyE46GwvYsT0GRrmtDxN1pp2Z9Mn9VUexV447JygO0AUAUAUAUBcdnMXZjGdzajzH9Pwru+C6npm8T78fJztfitdaNLXpzlHKAKAKAyHbbsk2IK4zCN3WOh1jcaCQD+7k5jeATzIOhNQ0Sn2JHYrtYuNVo5F7rFQ+GeA6FSNMyg70J927kSsNGnqSAoDDdrNqdxtCJe6d++hCKQPCMshMhZjuspB93OtXVR6om1pX5qGdu7QxMYV8PFHKp3qzFGP3WsR6EcemulFRf3M22p3sikXtdjf/rl8/nK/wDjVujH6k9OT0LrYe3nmbu5cOYWtcEOsiNbeAwsQehA86pKKW6YqS5ReVQsMz4VW3jXmKEqTRm+02ye+hkgOpK3U8mGqn3/AJ1lxz6ZJkziskGjx7YuB7+eOE6Z2AbmANW9bA10Jy6Y2c2EeqXSevrMkRTDxpwuFFgqKNLk9ToALk68jXP3a6jq7J9KMN8o2x1jZMRGoUSEq4Ggzbw1uovfy61taed+VmnqsdPqRjK2DUPQPktwH7XEEco1+DN/+fdXn/G832418s39DDmR6BXnzohQBQBQBQBQBQHUcqQw3g3FXxzcJKUezKyipJpm0wWIEiBxxHx4ivdabMs2OORdzz2SDhNxY7ItwQCRcEXFrjqL1nKGAGyts4D+zYhcfCP7qfwzWHBZb+I9SfSo3LbErZ/ylYfOIcbHLgpv3ZlOQ9VktqOpAFLIr0Nnh50kUOjK6ncykMD5EaGpIMn217KPMy47BN3WOh9ltwlUf3cnO40BPkdN0NEp9iZ2L7VpjkZWXusTEcs8LaMjDS4B1Knn6UsNUaSpIM/25wYkwkjhGeWEd7CEUs/eL7IUDWx1U9GNVnHqi0Xxy6ZJlJszEd9hFkKlcwLAEWIGY5bjgbWrkyXTKjqwn1bmfXE4iJnU4V5ELkoySR6KbaMJGUjW/PfbhV6jLuXTlFvYnYB3zCRo1jA3DNmY8728I959Kq0lwSnKXJqFNYzGdoCu2oNVPn/z41KLwPOdidmZ48e05ULEskpW7C5DZgpVRfnxtW3PKnjo18eGSydXYm7RQtPiJEcrNCFKLcgSRqgYqVO9SS4DcDWNcJGV8trlB8oRDYJW+3GR6g1On+8rqvsPMa3jnHsvYzB91g4V4suc+b+L8CB6V43xHL9TUSfpt+DtaaNY0XdaJnCgCgCgCgCgOUBLwuz5JPZXTmdB/WtzBoM+aumO3qzXyanHDlmk2TgTCpUte5vbgPKvU6DRy00HFyu9/g5OozLLK0idW+a4UBG2hs+KdDHNEkiH6rqGHuNAYzEfJwIWMuzMXLg3OuQEyQsftRsfzNuVRRNknYu1dqxzx4bG4RJEckfOoGsgsCbyIdRu6amhOxbYzsrDJjIseC0c0dwxQ5RKpFgsv7wH5ClEWXtSQV+38b3OHkkHtBbIObt4Y19WIFVk6TZMVbopMHhBHEkQ1CIqedgBXHk7dnViqQw2zRwb4Usy9bHIsAo1Ovnu91LIc2yVUFQoCt2m92A5D8alGSBCqS5W4rBmTEIbXVYpFvbczlQLcyQD5WHOrp+X9zHJXL9jKfKdtAfR4RTqpzyAfVNrIp62JJHUVs6eH6mamqyX5UYaKPMwUb2IHvNqzyfTFv0RrLdnvUUYUBRuUAD00rwc31SbO8lSoXVSQoAoAoAoBUQBIDGw4kC9vSsmJQckpul6lZuSXlVs1GA2bCAGUB+THX+gr1uk0GlhHqgur3e5xc2oyydSdexZV0zVO0Bh8Ti9vZ2yYfBFMzZCXe5W5yk677WqNydhv552g/w2B/nf9abk+UPnnaD/AA2B/nf9abjyh877Qf4bA/zv+tNx5TYbIaYwxnEqizZR3gQkoG4hSeFSVGdp7dw2HIWeeONm3KzAMRzC7yOtQ2kSk2PYDaUM65oZY5BzRlb32OlE74DVGY7cbVEWIwkcnhibvJLk2VpEyrGhY6Xs7MAeKjlWDUX00jPpoxctyr2r2uiwxXvY5AraK4GZCeXhuQfStCOJy4Zvyai9yfFjXaVMo8DZg45aZlbpqMv8Q5VFKtyZRaqizFUAUAxi58g6ndUomKsqlUseZNSZdkiU+zja4NzyqLKqZlMTtXFSSSwwGOFY2CNLlLyklVY5QfCts1qzeWKTZiqc5OtkZzbvZS8YaElpBcuWN2lvqSWP1r/jWTHn3qRTLptriZbZkRXEwq6lSJY7gix9sc6zZ3/kya9GakFU0n6o9xrw1NcncTsKgkKAKAKAKA5QErAY94jdTpxU7j+hrc0mty6aVx47owZsEcq359TUYDaCSjwnXip3j9RXrNJrcWpjcXv3XocbNgnidP8AJMrcMJygCgOO4AJJAA3k6AeZoDDYzFNtCZ8k8i4SI5F7lyhxEg1d+9Q5u7U+ABSLkNvFq1M+dxdRNrBhTVsIdjNGbxYzFoORm70f98PWutVMzvTwZ1MNHhc0gjdy2skv7SQnm5PiI6DQcgKo5ym92XjCMA+aYbEgSKFuRdZYzkkAO4rKlm+NRGcoMmWNNF52cHzjBouIAmILxuXVTn7t3jzMLWuct/M11Yu4nMkqkzM7R2LDhcdFFCMkM8MjGMHwo8LR2ZFa+UESWsNPCK1dVFdNm3pckrousPEqjw+/ff1rQZttvuO0AUBWSqZJCBuGnlb+tWMifSifBAFGg9eNVKN2OUKmF2HHnMs1tJZZJB1UtZP9IBrLPlL0MmFVH5Zcd0vIVQyWZvtl2b+cIJIh9NHuH743lfPiP61mw5Ol0+DBmx9VNcozELlfpMPI8TrbMASLNxV4zobGpyYoS8s0mjoxwYc+Hrx+Vrk0uzu3CBQMUjIw0LqpaNuotcjytXGz+ETUrxO16dzVeSUNskX89i3TtVgiL/OY/U5fgRWnLw7Ur9DC1GL1LmtIzhQBQBQBQD2BidnAj0bny6npWzpIZcmZLE9/Uw55QjB9fBtYwQACbm2p517mKaSs4D9jtWIESyqilmIVVBJJNgANSSTuFAYbG4pdpzA5S2BiF1zAhMTKT7eU+3EgGhOjM1xfKDWnqM1bRZt4MXeRaQlB4FyjLplFhl6WG7yrRd8m4vYYxqS+1CwuPqN7LdMw1Q9dR0qY1wyGM7I2ss9xYq6kqynQqw3qw58eRBBFxSUaJ5VlRsXZbtGZopjEJXeRY8isiBmOnBrneRe1yayTkrqikHKuSyweFxkMIiixijIDlvALMxJYmS7km5JJsRvrKtXVKjC9Mnbsj7ZnXF4BdoNmhxUGeIBCCO9MixPEQ4IaNpFXXeBYg1tyUZRtmtByhOkMbIwe0IzmmbDML6qneKSOeY3F+lvUVzpdHazoKU391GlrEXCgGsPFlvzJJNA2O0BX7alPdlENmcFb/ug6M3nbd1tVo8kdN7FbhYVjCqosFtYeVTd7mxVKkX5iU/VHuqhgsi4nBIAWvlABJ5WG+rR3dFvqNHkWGnD95OwJEru9txsdE+Fq2ZcpHV0ONx0zkuZDQex0qXuZU2hzJAy+KIZ76mwtaotoPDgm7lFfg9TrxZohQBQBQHUQkgAXJ0Aq0IOclGPLKykoq2a3ZWzxEvNj7R/IdK9noNGtNjru+Th6jO8svbsTq3zXCgMr8pwJ2dKv1WeBJP8ALaeJZPTKSD0JqsvtZaK3R3vlDiO4DWJC9FsDYdLr/MK49N7nU4Im1NlibxBiko9mRd46OPrp9k+ljrUxlQ90Q9gbVMi2cWIZkcfuuhKsATvFxoeRFTONF1Uo2RH8ONnynRkgfT976RD8EWrP7URjW7RXrt84KVospmiYhyEy54GlewWzEBlZiSBcEa8LVfoUlff+SkvJJ1x/BpMLtfPc9zIiKCzPJkUADU2AYkn0A61i6K2Fvloc7O7EGK2UY5SyHFmSe49qMyyGaIgHivgPpXVhGo0c2UvPZQYDF41Z5MJL3V4GRWkVn8eZQ6skZXS4Ovi0N99q0M2KMDpYcn1FdGtUaVrFztAFAcLi9r6nUDjYbzblu99KIsbxEAcW9x5VKLJ0UzLY2O+pM1l8tVMBkPlF2tliGEQ/SYjRrfUiHtseV/ZHmeVZsSrzMnHiebIsce/PsjE4prgAADQAAaCwFZFuz0WRRxYulcEVHK3Fhrob1Y1as5kNr2050oOS4PWK8UagUAUAUBbbEnhj8Tt4z0NgPSu14Xm0uDz5HUvjg5+rhmntFbF7HtCJt0i+8D8a9BDWYJ8TX5Oc8GSPMWSFYHcb1sKSfDMbVcnasQV/aHZoxOFnw5/vYnS/IspAI6g2PpQLk86eL59g8NMzsjvGrEqQrK4XKxRyCUNywuLHhXLbcJNHWhFThuP7K7RBsLG0kyBhGveMzAEMos+YE+E3BvVZQfVwXj01bZncPt8x53XDyOk8xMbZkXMWCgeFjmAJUte27Wsjgpd+EVU3HdLZvYfi2RLMzTSyyI72BWGRkRVHspcWLEXJvpqTVfqVtFbF/pNu5Pf2LnZXZ6MKYwgytfPe5vfeWY6s3XfVHN3ZZqMVSJ23Y/o4cCHZjipFh8Ru3de1NqLE/RqwudbsN9ZMEeudmnml0xN7JIkSXYqiKN5IVVA6nQCumc88w2zt/CHaeeHExOJ4VVirAqskTNlu27xK9hr9TrWpqY2rRu6SfS2pGow2LV1zAjrqK0GmbbpEPaHaLCQftcRGvTMC3oi3Y+6rLHJlHOK5Zm27cnEuYsDHoPanlHhUHdliBuxOtrkbt1ZHiUFciISeR1E02wsD3aZmZnkksXdzdm5DTQAX0UAAXNhWKUrL9NFlVSSvxMN5R11PpvqUXT8o32h25HhI87+JjpHGPakbkOQ5ngKtCDkzHTbqPJ5i8jySPNM2aWQ3Y8FH1UXkoH61mf8AxR6DR6RYIW/ufP8AYg45/pAitfLYkj4e8/AVkiqRr58v1ciguFyKjiLXPIX86gvXsBRrW1tyqLLvFL0PVq8WaAUAUAUAUBygOqxG428qtGUo7xZVxi+Ta4JCI1BJJyi9+de700XHDFSe9I89kac3RIrOUPM+yMPeYKNhp48QV+6Z5So91q5Wf72dXTyqCHMR2Vid+8aKIvvzZVJv5ld9U65LazK+hu2iBtLZ1pMOxBtHKC1+TI8YPoWBq0XyTPs0axcKg+qKxFepjjEKLmwAFydwAG8nkKmm3RWzzHF9sWOPOKhRWWJGiw7PfKuY/STZBYuTawFxpW9irHH3KrS5M79EUe3NoyYl82Jlec3uqn2R9yJfCvnbzNTKbZu49HhxbNW/TkhmJ8ptEoH2iP8AaAar1LuzO8WZx8uNJe5Alw+UZmjit6/AVdNPizRy4pY11TjH+o5Hcj6OFUHM2/QUdJ8loPJOPkxpe7NJ2CfwyoRqWDggWDA+HToCvxrX1CumjHgTjd9z1jBSho1Ych7xoa1g1THmYAXOgHE7vfUpehUyu2O2UKErhwJpN2YH6JfvOPa8lv6Vkjj/AORlxYMuZ1BbevYxM8rySGaZy8h0zHQKP3UXcq9Pfer3tSO7pdFDBvy/UZxcoKgR3LH2r7vSrJJE5ck5XGAjAYNQfGTYm7W3nzqXKymLSuCd8kkgDdu4VjZuxVLYXZcu85r+lqkNys9GrxxwQoAoAoAoAoB3CRZnVebD+tZ9Lj+pmjH3MWWXTBv2NvaveJHngqQeW9jsesDS7LlYLNhpJAgJH0kbMZI2XmcrDTfa3W3O1GNqVo6GCacaNdWqZzjAcaEmd2t2zw2H0PeOxuFCIbMeQdrKfO9ZY4nIo5b1XJiO0HaSfGDKw7uH/wCMG5f/ADX4/dGnnWaMIx4N3DpG3eT8Fesea2lhu040lI6uHA3zwS8MFjJ8AO/Q8+Z61S2bSxxSqJCxshFgBcncOZ4CrQXc19Vka8q57HIcEAMz+J9deA6KOHnvqXPsimLRJXkyby/ovgi45iqMeNre/T86vD7kaeqlWGTRZQQFbZCylVy3Ukaab+BHnWJyN96LFLHGL7KidBtbEouVcTINb7o//Co8vojA/C8be8mMYh3kIM7ySjfaRmKn+D2fhU9XojLDw/Tx3q/nc4+pOVbDkNwqG2zcilBUdVxlK5QSePEURLjvYjLbhpUBJcIclbM1wtugoIpxW5yNwAwKg3Fhfh1FA1e4i2l7aUJbR6TXjzgBQBQBQBQBQFjsBLy3O5QT+X511PCIKWo6nxFWaeulWOl3LvE7ZiT62Y8l1+O6u9m8V0+La7fojnQ0mSfavkqMd2jYAkWRQCSx1IA1J5VysnjObJLpxRr+puR0MIq5uzD7I2f84hOJxMYc4qRpxmAJUNYRWP1TkVN1dOU5Kle6/qWxY4uPBYLs4DRZZ16CeW3uLVXqf/UZPpR/6xksw8JZj95mb4k1jbMiikYja8pmxMjD2YRkHn9c+/T0rbhHphRbTLqyOfpshUPsAHde9UbO5hxRrqaJLxshU7jYEVUzJqWyOojSMeJ1J4UJbUUR1GpPPT00v77D3VPVtRj+kuv6jHniICsdzbvSoMlp7EHFYcyEg65qyxkc/UYF0tPhjcGLmiBQWcEWOtmsOe8HzqWl8GGGTNBJNdVfsxz501s3dG272l/Wq9C9TOtdK66P6kiPESSlQQBuAub/AJCoaRmxTm96pfkkAtGxANiNDxqpsbSViVhJUtwG+oJcknQNKSApOg3UFJOxTK0bcmHrvqSNpI4kbNmblqagltR2Od82XLfS97daBxV2ejV484IUAUAUAUAUAVNshqzlQSVG24ziHjwK/wB94piPqwKRn8i5sg+8eVdTwzB5nlfC4+TV1E/0Lv8Awa7uxbLYWta3C3AV1WzGtiqxmHyHod36VYyxlZS7ZlEaNKdyqxP8IvUpW0i0pdMWzzjBA5ATvbxHqW1rbkbWkh04kv3/ACXIjUIDm1vbL053rCdmN30jeHNzYm2tr8hRoiErTFSEBioN7caFoyT2FqgykltRaw50JcnYioJ43FzIAbK2Yc6kiL6luJTDoQxJAIGgtv6UTKSgvQaEQ5UtkrFFdh+VALWa9xc8LHlQtF2EKAnxNl0379eVBJtLYRUEi3QAAhrk7xyoQpO6CJQSAxsOdA9lsJO82P8AWhPIrIMt82t7ZbcOdSVbd0ejV444QUAUAUAUAUAUAzi8QsaNI5sqAsx5Aamr44OclFcsrKSirYnshg2yNipRaXE2bKd8cY/ZR+gOY/aY16aOOOKCxx4X8mim5Pqfc0FCxHx6XQ9NalEx5MP28ktg2HF2VB/EdfgDWbErmic3218GSwwXcRyt0rK3ydjHHeKJd6xHUZHEw1sLaD361dqzQxZXFysXs11uxYXG7fx50lsTgbnbQ7VDeHHZbCwIPE331JVJ3bOQlQQWFxxFQhK62EsRfShK9xZZctrHNfffS3K1SRTuxKEXFxccagl3R2Ui5Kiw4CpZCtLc6rLlIIObgeXpUBp9QihYXOyk3UWHI0KxtLcImUA5gSSNNdxoJXew3QselV488+FAFAFAFAFAFAUmPj+d4qPB74o7TYjkQD9FEfvMLkclrteGYemLzP4Rp6ifU+hfubOt8qFAM41rI3lRckx5PO+301lw6c5c/wDIp/NhWzh7su49WSETOwKS17bt9WfB2sTqaJWIxB7vJpa/rr1qsTZzeVX6lYXKMxP1VU/7jWWtkcpzpyfov7kvZkbNoBc5QT+Zqk1bNzRtRikyYspCldLE33a++qWbzim7ONGQASNDu61AtMW7NI27U8B0oQkoo4kpXMLDUWNxuqSWlLcSYzbNbTdeoom1wKkkLlRYXAAFhU2Qko7nY3aNjprqCCKENKSECM2LW0G81BNpbHXlJCrpZd2muvOgSSdilzRsCRYjgaEbSQkIWuQN2ptwoTajsHfHLksLXvu1qbI6dz0avHHCCgCgCgCgCgGMdilijeVzZUUsfIC9ZMWN5JqC7lJS6VbDsbs9o4DNKLTYlu9l+zm9iPyVbDzvXp2oxShHhbGjHfzMv6qXCgIG05Ny+pqUXgu55x20kD4uGO4GWJm15s1vwWtrEvI2XxtfWV9kUwYjcf61LOqmk02ScUngV7jUnTj61WKM+ad0U2Lc3kBO9Vt5ezWaKujjZ30Oa9UmWuGYo9gelwd9YpHW07TasmLFdS1xoQLcT5Vjo3OqnQksTYE6DdyFC1Ldi5FKNYNcjip/Op4IT6lucjjzBjmAsL6nU+VA5VsJzm1rm2+3D3VBNK7FyR5bWYG4vod39anghPqtBEmcm7AGxNyd9OSJPpWwgObWubHeOFQWpXYp4rANcG/Abx51JClbo6gLsAW1PFj+dA6ithNyLgHobHQ/qKgbPc73XhzZhvtbj51NDr3o9GrxxwQoAoAoAoAoCm2ynfz4fB/Vdu9l/wAqKzWP3nyj311/CsW7yvtx8s1NTLiJsa6RQKA47gAk7hQLcpJpCxJPGrGdKkYLauzDi3xEymzpIEiPAiJQGHkWLe6thZOikzXUHJua5XBRxODmSQMki6FeIP6Vkao6OLP9aNcPuc+c28L6cjwPkeHkajpvdGX/ABHT5Mm3o+wztiEFQyk3A1v13irwdOjU1uNyh1rsTcKy6Fr2tfSsbN/HJ1Fom1iOomOPlsLXv9a+7papIV3uchy5hmvbjbfUIl3WwlrX03UJ+RZy5eOa/papK73vwJS1xfdxtUE9tjstrnLe3C++gTfc6uXKb3zcOXW9CH1XtwIoW+Bc+W/gvbrvqSsbrcIstmzXvbw259agS6r2G6Fj0qvHnnwoAoAoAoAoCt7LL3uKxeI4IVw6eSDPJb+Jv9Nel00Pp6eMfXc58n1ZG/2NVWQsFAV20pvqD1/KpLwXcptrY0QQvLvyjQc2OiqPMkD1q8VbotOXTGyu2HgSkaRnUgXc82Pic+pJqJu5Ewj0wSJ2P7NQ4wjOCrKNJE0deQvxHQ1aORxKZErtcmM7TbBlwSDve7liZsoceFyTfRozv9Ca2ISUuCVqmtsqtGcZDZljNxqCjXBXyvqPKsl8X+SWm4NYXar7fQm4M5kU/ZHw0qkuTd00rwxfsWmGmGQrlF7jXiLcqws6uF9W/odtuNv61BmHJWzNcLa/AUZCXStzkbgBgVBuLa8OoqQ4t72II0vbTnUE+w5LJmtZQLC2nHrUkJVyET5SbqDoRY8KgNWthsKd9tKE+wt5AQBlAtvPE+dTZCTTsIzlYEre3A1Aa6lsJte5A66cKck8bMV3gy5cove9+PlSyri7PRq8ecIKAKAKAKARLJlUsdwBJ9BerQj1SS9WVbpWRvk8itgYnPtSl5W85HZvwtXq8uzr0o5+PizSVjMgmV8oJ5UCVlGzXNzxqxnRS42M4iZUH7KE5mPBpfqr1CA3P2iORq/2ox11S9kW8UVtB/7qnBkbJuLxsWDgaaZsoGp5k8FUcT0qYxcnSNfJNLcyOzsJLjpxjsUuVF/s8B+qODuOfH/0K0dfrVjj9HFz3Yw4XN9cv2LHb/ZyHFC7DJIPZkX2h5/vDoa52k12TA9t13TNnJhUt1szz2CF4GeFj442Km24g+IEdDe9enjkWSKnHhovon5XCXKZJwwOp4bj+VJKzp4cijKvUltKSApOg3VQ3qSdi2DRtyYeu+hG0kcSNmzNy1NCW0qQnvTly38N7261Fk0rsU8bIVO4mxFOCqalaOojSMeJ3nhTkNqKELKQpW+h3ipJpN2deIgBjubd6UoKSewrxSNvuxpyRtFCVdlzAG19DUcE0pbh3Jy5+F7UoOSuj0avHnBCgCgCgCgK7tFJlwuIYcIpD/pNbGkV54L3MWV+R/Ba9lY8uDwy8oY/9or0uTebNPH9qLSsZcg7Uk0C89alF4LuVxFSZBMUYUBVFgNw/wCcakUkJ2jtaLBgGS7zP+zhTWRj0XgOp0FFG93sl3ZgyZVwiog2VLiZRicfYldYsONY4urfvv8A88uZq/EUl9PDx692Wx4G31z/AAaGuMbZ2hJgu3GGCYqOTcsyFWP2k9k+oa3pXovCcnVicPT/ANmBSePOv/Io66Z1EWIC5FYNcneOVY2qN7FNyW4qFQWAY2HE1Bd7LYQf+daErjcWUGW+bxX9npzvUkW7oSgBIBNhz5VBPbY7IoBIBuOB50IW63OqgykltRuHP1qQ27oRUFqFzKAbK1xz3UKRdrcIkBDXa1hp1PKhMm0xFCx6TXjzz4UAUAUAUBXdoYs2FnUcYpB/pNbGkdZ4v3MWVXBlp2Ulz4LDMOMMfwUCvSZdps0sf2otaoZCp2k/jN9AAP1qyTMkdkZ7Gdp8LGcne94+4JEDIxPKy6e+sn03VvZe5V5oLYIsRjJ/2cYwqH+8ks81vsRDwoerE+VaWbXYcWy8z9uPyOnJP2RO2ZseKAlgC0je3K5zSN5sdw6Cwrj6jV5M7qT29EZ8eKMOOSwrVMp2gCgMn8pMN8KsnGKVG9DdfxIrr+DzrO4+qNXVbRUl2ZlFYZd2ptY13zqc00PYRt4rHI3dO+US52Um6iw5VVmeKaW4RstmuLkjTXcakST7DdQW9hyZlNsotprrvPOpZVJ9wgZQfELi3lrUCSdbDdCw47LYACxG8338qkqk09zkLAEFhccRUB21sJYi5tQlC8y5bZfFfffhytUlWpWejV444QUAUAUAUAl1BBB3EWPrUxl0uyGrVGfwWF2hhFEOGkglhW+RZlcOovfLmQ2YdTXeh4nhmv8AMTT9jSenyR2i0Pu21ZNGnw0A5xRtI3/cNqiXiWnX2xb+dgsGV8tEU9kEkObFTz4g8Q75U9EXd7615+L5HtjSReOlX6m2XeB2dDCLRRIg+yACfM7z61z8ufJlfnk2bEccY8Ik1hLnaAKAKAKAo+20WbAzjkob+Vgfyre8NlWpizX1KvGzz3CtdFPQfhXqJcm/p3eKL9iXFKbqOWnvqsuDZw+WZMhlKkMLXHOsZvtXsJJvrQLYWZTlyaWvfdr76WR072JRrEEcNaE1ao7K5YljvNAlSOrMQpXSx6a++lkONuxFCzFzzFzmNr9NKFYqgjmKhgLeIWOn4UsONsboWPSa8eefCgCgCgCgCgChAUAUAUJCgCgCgCgO0BUdrP7FiP8AKf8ACtvQf7iHyYc/+nL4PNcB+zXyr1k+Ta0n+jEkrvHnVDaj9yJ9YzpBQBQBQgKEhQBQBQBQHKA//9k=">
        <h4> <a href="https://www.nhs.uk/conditions/pneumonia">For more information about pneumonia</a></h4>
        </u5> 
        `
    
    const button = document.getElementById("boton");

    button.addEventListener('click', e => {
        console.log('click');
        const contenido = document.getElementById("contenido");
        contenido.innerHTML = `
            <ul>
                <li>Group Students: 
                <u2>
                <div id="contenido"></div>
                Dalila Allaoui Ouadi
                <div id="contenido"></div>
                Nicole Cabrera Villavicencio
                <div id="contenido"></div>
                Tarandeep Sigh Mandahar
                <div id="contenido"></div>
                Manuel Gregorio Collazo
                <div id="contenido"></div>
                Trinidad Arenas Costa
                <li>Contact with us: trinidad.arenas@uvic.cat</li>
                </u2>
            </ul>
            
        `
    })
    

    })


    const X_ray = document.getElementById("X_ray");

    let first = true;
    img = document.createElement('img')
    X_ray.addEventListener('click', e => {
        console.log('X_ray');
        const url = 'https://dog.ceo/api/breeds/image/random'
        fetch(url).then(res => res.json()).then(res => {
            const { message, status } = res
            if (status == "success") {
                img.src = message
                if (first) {
                    document.getElementsByTagName("main")[0].appendChild(img);
                    first = false;
                }
            }
        })


    })
});