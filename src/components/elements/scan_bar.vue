<template>
    <div class="mt-5 fixed-bottom ">
        <div class="card card-scan-cam mb-0 shadow">
            <div class="card-body text-center">
                <div class="camera-icon" data-bs-toggle="modal" data-bs-target="#ScanBonRamassage">
                    <i class="fas fa-qrcode"></i>
                </div>
            </div>
        </div>
    </div>
</template>



<style scoped>

.card.card-scan-cam{
    height: 50px;
    border-radius: .25rem .25rem 0 0;
    background: linear-gradient(to right, #0d3348, #0A2635);
}
.fixed-bottom {
    position: fixed;
    bottom: 0;
    /* Changed to 0 to place it at the bottom */
    left: 0;
    right: 0;
    z-index: 1000;
    height: 50px;

}

.camera-icon {
  position: relative;
  bottom: 40px; /* Adjust as needed */
  left: 50%;
  transform: translateX(-50%);
  background-color: #FF8C00;
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

.camera-icon i {
  font-size: 24px;
}
</style>

