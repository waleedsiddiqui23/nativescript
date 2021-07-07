<template>
    <StackLayout backgroundColor="black">
        <Label class="h2 text-center" text="Shopping Cart" />
        <Label class="h2 text-center" text="(Tap a product to remove it)" />
        <ListView for="lesson in cart" @itemTap="onItemTap" height="68%">
            <v-template>
                <StackLayout>
                    <Label :text="lesson.subject" />
                    <Label :text="`Price: ${lesson.price}`" />
                    <Label
                        :text="`Available Space: ${lesson.NumberOfSpace}`" />
                </StackLayout>
            </v-template>
        </ListView>
        <TextField hint='Enter your full full name...' v-model='fullName' required
            keyboardType="email" />
        <TextField hint='Enter your number...' v-model='phoneNumber' required
            keyboardType="integer" />
        <Button @tap='submitOrder' text='Submit Order' ios:color="red"
            android:color="red" />
    </StackLayout>
</template>

<script>
    export default {
        props: ["cart"],
        data() {
            return {
                fullName: "",
                phoneNumber: "",
                myArray: []
            };
        },
        methods: {
            onItemTap(event) {
                this.$emit("removeProduct", event.item);
            },
            submitOrder() {
                if (this.fullName == 0 || this.phoneNumber == 0) {
                    alert("Please Enter Your fullName & phoneNumber");
                } else {
                    let webstore = this;
                    for (var i = 0; i < this.cart.length; i++) {
                        var myLesson = {
                            fullName: this.fullName,
                            phoneNumber: this.number,
                            subject: this.cart[i].id,
                            NumberOfSpace:this.cart[i].NumberOfSpace
                        };
                        this.myArray.push(myLesson);
                    }
                    fetch("https://cstcw2.herokuapp.com/collection/orders", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(this.myArray)
                    });
                    alert("Your order has been processed");
                }
            },
        }
    };
</script>