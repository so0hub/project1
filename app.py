@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json
        
        # 1. 입력값 가져오기
        age = float(data['age'])
        price = float(data['price'])
        gender = 1 if data['gender'] == 'M' else 0
        
        # 2. 스케일러 적용 (가장 중요!)
        # scaler는 2차원 배열을 기대하므로 [[값]] 형태로 넣어야 합니다.
        price_scaled = scaler.transform([[price]])[0][0]
        
        # 3. 모델 입력 배열 만들기 
        # 주의: 캐글에서 학습할 때 썼던 컬럼 순서와 똑같아야 합니다!
        # 만약 학습 때 [price_scaled, age_group, gender_M] 순서였다면:
        input_features = np.array([[price_scaled, age, gender]])
        
        # 4. 예측 (확률 추출)
        probs = model.predict_proba(input_features)
        
        # 5. Top-2 추출
        top2_indices = np.argsort(probs, axis=1)[:, -2:][0]
        recommendations = le.inverse_transform(top2_indices)
        
        return jsonify({
            'status': 'success',
            'recommendations': list(recommendations[::-1])
        })
    
    except Exception as e:
        # 에러가 나면 브라우저 콘솔이 아니라 서버 터미널에 에러 내용을 찍어줍니다.
        print(f"ERROR: {str(e)}") 
        return jsonify({'status': 'error', 'message': str(e)})